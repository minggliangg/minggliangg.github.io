import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {Link} from "gatsby"
import * as headerStyles from "../styles/navigation.module.scss"


export default function Navigation() {
    return <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand><Link to="/" className={headerStyles.brand}>Ming Liang</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/" className={headerStyles.navLink} activeClassName={headerStyles.active}>Home</Link>
                <Link to="/blog" className={headerStyles.navLink} activeClassName={headerStyles.active}>Blog</Link>
                <Link to="/about" className={headerStyles.navLink} activeClassName={headerStyles.active}>About</Link>
                <Link to="/contact" className={headerStyles.navLink}
                      activeClassName={headerStyles.active}>Contact</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}