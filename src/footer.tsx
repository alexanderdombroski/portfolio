import React from "react";
import github from "./images/github.svg"
import linkedin from "./images/linkedin.svg"

function Footer() {
    return (
        <footer>
            <FooterIcon href="https://www.linkedin.com/in/alexander-dombroski" src={linkedin} alt="LinkedIn icon"/>
            <FooterIcon href="https://github.com/alexanderdombroski" src={github} alt="github icon"/>
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