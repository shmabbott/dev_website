import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div class="navbar" data-is-root-path={isRootPath}>
      <div class="nav-brand">
        <Link to="/">{title}</Link>
      </div>
      <div class="nav-items">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar
