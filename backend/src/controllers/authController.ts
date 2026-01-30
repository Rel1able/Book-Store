import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma"
import { body, validationResult } from "express-validator";


const validateSignUp = [
    body("email")
        .isEmail()
        .custom(async value => {
            const user = await prisma.user.findUnique({where: {email: value}})
            if (user){
                throw new Error("E-mail already in use");
            }
        }),
    body("password")
        .trim()
        .isLength({min: 5}).withMessage("Password must be at least 5 characters long"),
]

async function register(req: Request, res: Response) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        res.json({ id: user.id, email: user.email });
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
};

async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });
        res.json({ token });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

function logout(req: any, res: Response, next: any){
    req.logout((err: any) => {
        if (err){
            return next(err);
        }
        res.status(200).json({message: "You logged out"});
    })
}

export { register, login, logout, validateSignUp}