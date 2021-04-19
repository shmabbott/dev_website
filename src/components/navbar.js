import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div class="navbar" data-is-root-path={isRootPath}>
      <div class="nav-brand">
        <a href="/">{title}</a>
      </div>
      <div class="nav-items">
        <a href="/">Home</a>
        <a href="/blogs">Blog</a>
        <a href="/about">About</a>
      </div>
    </div>
  )
}

export default Navbar
