import { Outlet } from "react-router"
import Dashboard from "./components/Dashboard"

function App() {


  return (
    <div className="flex  items-center">
      <Dashboard />
      <div className="m-auto">
        <Outlet />
      </div>

    </div>
  )
}

export default App
