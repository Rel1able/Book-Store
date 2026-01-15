import { Outlet, Link } from "react-router"
import Navbar from "./components/Navbar"
import { CiShoppingCart } from "react-icons/ci"
import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
function App() {
  const [visible, setVisible] = useState(false);

  return (
    <CartProvider>
      <div className="flex items-center h-screen">
        <Navbar />
        <div className="w-full h-screen">
          <Outlet />
        </div>

        <div className="absolute top-8 left-[95%] dark:text-gray-300">
          <button className="cursor-pointer" onClick={() => setVisible(true)}><CiShoppingCart size={32} /></button>
        </div>
        {visible &&
          <Cart />}

      </div>
    </CartProvider>

  )
}

export default App
