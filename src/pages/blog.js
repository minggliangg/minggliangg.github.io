import React from "react"
import Layout from "../components/Layout";
import {graphql, useStaticQuery, Link} from "gatsby";
import * as blogStyles from "../styles/blog.module.scss"

export default function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }

                    }
                }
            }
        }
    `)

    return <Layout>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(edge =>
            <div className={blogStyles.entry}>
                <Link to={"/blog/" + edge.node.fields.slug} className={blogStyles.entryTitle}>
                    <h2>{edge.node.frontmatter.title}</h2></Link>
                <p>{edge.node.frontmatter.date}</p>
            </div>
        )}
    </Layout>
}