import { Outlet } from "react-router-dom"
import { Navbar } from "../components"


const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default Layout
