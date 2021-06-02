import * as React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.css"

const Navbar = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={navbarStyles.navbar} data-is-root-path={isRootPath}>
      {children}
      <div className={navbarStyles.navBrandLong}>
        <Link to="/">{"<"+title+">"}</Link>
      </div>
      <div className={navbarStyles.navItems}>
        <Link to="/" activeClassName={navbarStyles.active}>Home</Link>
        <Link to="/blogs/" activeClassName={navbarStyles.active} partiallyActive={true}>Blog</Link>
        <Link to="/about/" activeClassName={navbarStyles.active}>About</Link>
      </div>
      <div className={navbarStyles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar
