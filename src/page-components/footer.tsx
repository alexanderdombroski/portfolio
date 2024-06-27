import React from "react";
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

function Footer() {
    return (
        <footer>
            <p>Website made with React and TypeScript</p>
            <p>&copy;2024</p>
            <div>
                <FooterIcon href="https://www.linkedin.com/in/alexander-dombroski" src={linkedin} alt="LinkedIn icon"/>
                <FooterIcon href="https://github.com/alexanderdombroski" src={github} alt="github icon"/>
                <p>Free icons from <a href="https://www.iconfinder.com/">iconfinder</a></p>
            </div>
        </footer>
    );
};

interface FooterIconProps {
    href: string;
    src: string;
    alt: string;
}

function FooterIcon({ href, src, alt }: FooterIconProps) {
    return (
        <a href={href} target="_black">
            <img src={src} alt={alt}/>
        </a>
    );
};


export default Footer;