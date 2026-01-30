import { Router } from "express";
import {register, login, logout, validateSignUp} from "../controllers/authController.js"

const router = Router();

router.post("/register",validateSignUp, register);
router.post("/login", login);
router.get("/logout", logout)

export default router;