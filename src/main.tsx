import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import Store from "./pages/Store.tsx"
import { ThemeProvider } from './contexts/ThemeContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store/> },
      { path: "/favorite", element: <div className="text-white">Favorite</div> },
      { path: "/wishlist", element: <div className="text-white">WIshlist</div> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>

)
