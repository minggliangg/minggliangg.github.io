import React from "react"
import Layout from "../components/Layout";
import {graphql, useStaticQuery, Link} from "gatsby";


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

    console.log(data)

    return <Layout>
        <h1>My Blog</h1>
        <ol>
            {data.allMarkdownRemark.edges.map(edge =>
                <li>
                    <Link to={"/blog/" + edge.node.fields.slug}><h2>{edge.node.frontmatter.title}</h2></Link>
                    <p> {edge.node.frontmatter.date}</p>
                </li>
            )}
        </ol>

    </Layout>

}