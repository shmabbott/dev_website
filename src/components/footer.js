import * as React from "react"
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = ({ location, title, children }) => {

    return(
        <div>
            <div>
                <a href="https://github.com/shmabbott">
                    <IconContext.Provider value={{className: "footer-github-icon"}}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
            </div>
            <div>
                © Copyright {new Date().getFullYear()} Sam Abbott
            </div>
        </div>
    )
}

export default Footer;