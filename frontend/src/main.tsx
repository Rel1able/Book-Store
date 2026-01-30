import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import StorePage from './pages/StorePage.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import GameDetails from './pages/GameDetails.tsx'
import AddedGames from './pages/AddedGames.tsx'
import GenreGames from './pages/GenreGames.tsx'
import PopularInYear from './pages/PopularInYear.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Favorite from './pages/Favorite.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <StorePage /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/library", element: <AddedGames /> },
      { path: "/games/:gameId", element: <GameDetails /> },
      { path: "/games/genre/:gameGenre", element: <GenreGames /> },
      { path: "/games/popular-in-year", element: <PopularInYear /> }
    ],
    errorElement: <ErrorPage />
  }, {
    path: "/login",
    element: <Login />
  },
  { path: "/register", element: <Register /> }
])

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>



)
