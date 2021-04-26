import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import * as headerStyle from "../styles/header.module.scss"

export default function Header() {

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return <div className={headerStyle.header}>
        <h1 className={headerStyle.title}>{data.site.siteMetadata.title}</h1>
        <Link to="/" className={headerStyle.navLink}>Home</Link>
        <Link to="/blog" className={headerStyle.navLink}>Blog</Link>
        <Link to="/projects" className={headerStyle.navLink}>Projects</Link>
        <Link to="/about" className={headerStyle.navLink}>About</Link>
    </div>
}