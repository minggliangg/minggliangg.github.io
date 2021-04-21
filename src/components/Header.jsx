import React from "react";
import {Link} from "gatsby";
import * as headerStyle from "../styles/header.module.scss"

export default function Header() {
    return <div className={headerStyle.header}>
        <h1 className={headerStyle.title}>Ming Liang</h1>
        <Link to="/" className={headerStyle.navLink}>Home</Link>
        <Link to="/blog" className={headerStyle.navLink}>Blog</Link>
        <Link to="/contact" className={headerStyle.navLink}>Contact</Link>
        <Link to="/about" className={headerStyle.navLink}>About</Link>
    </div>
}