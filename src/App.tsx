import { Outlet } from "react-router"
import Dashboard from "./components/Dashboard"

function App() {


  return (
    <div className="flex items-center h-screen">
      <Dashboard />
      <div className="w-full h-screen">
        <Outlet />
      </div>

    </div>
  )
}

export default App
