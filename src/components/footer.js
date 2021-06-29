import * as React from "react"
import { Link } from "gatsby"
import * as footerStyles from "./footer.module.css"


const Footer = ({ location, title, children }) => {

    return(
        <div className={footerStyles.base}>
            © Copyright {new Date().getFullYear()} Sam Abbott herp
        </div>
    )
}

export default Footer;