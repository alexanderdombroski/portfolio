import React from "react";

function Header() {
    return (
        <header>
            <Logo/>
            <Nav/>
        </header>
    );
}

function Nav() {
    return (
        <nav>
            <ol>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Attributions?</li>
                <li><a href=""></a>Link3</li>
            </ol>
        </nav>
    );
}

function Logo() {
    return (
        <a href="#">
            <img src="images/portfolio-logo.png" alt="portfolio logo" />
        </a>
    );
}

export default Header;