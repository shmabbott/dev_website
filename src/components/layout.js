import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header>
        <Navbar location={location} title={title}></Navbar>
      </header>
      <main>{children}</main>
      <footer className="global-footer">
        © Copyright {new Date().getFullYear()} Sam Abbott
      </footer>
    </div>
  )
}

export default Layout
