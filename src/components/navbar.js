import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header= (<Link to="/">{title}</Link>)

  return (
    <div className="navbar" data-is-root-path={isRootPath}>
        <ul>
            <li>{header}</li>
            <li>Home</li>
            <li>Blog</li>
            <li>About Me</li>
        </ul>
    </div>
  )
}

export default Navbar
