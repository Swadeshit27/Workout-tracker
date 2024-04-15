import { Outlet } from "react-router-dom"
import { Navbar } from "../components"


const Layout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}

export default Layout
