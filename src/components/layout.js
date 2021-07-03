import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="main-layout-container" data-is-root-path={isRootPath} >
      <header>
        <Navbar location={location} title={title}></Navbar>
      </header>
      <div className="global-wrapper" >
        <main>{children}</main>
      </div>
      <footer id="footer1">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout
