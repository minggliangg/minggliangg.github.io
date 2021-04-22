import React from "react";
import * as footerStyles from "../styles/footer.module.scss"
import {graphql, useStaticQuery} from "gatsby";

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return <p className={footerStyles.footer}>Created
        by {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
}