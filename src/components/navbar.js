import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="navbar" data-is-root-path={isRootPath}>
      <div class="title-nav-item">
        <a href="/">{title}</a>
      </div>
      <div class="basic-nav-items">
        <a href="/">Home</a>
        <a href="/blogs">Blog</a>
        <a href="/about">About</a>
      </div>
    </div>
  )
}

export default Navbar
