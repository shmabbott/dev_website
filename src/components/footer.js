import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ location, title, children }) => {

    return(
        <div>
            © Copyright {new Date().getFullYear()} Sam Abbott
        </div>
    )
}

export default Footer;