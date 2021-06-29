import * as React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./footer.module.css"


const Footer = ({ location, title, children }) => {

    return(
        <div>
            © Copyright {new Date().getFullYear()} Sam Abbott
        </div>
    )
}

export default Footer;