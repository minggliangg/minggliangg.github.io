import React from "react";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import * as blogPostStyles from "../styles/blog-post.module.scss"

export const query = graphql`query(
    $slug:String
) {
    markdownRemark(fields:{
        slug:{
            eq:$slug
        }
    }) {
        frontmatter {
            title
            date
        }
        html
    }
}

`

export default function BlogPost(props) {
    return <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div className={blogPostStyles.entryBody} dangerouslySetInnerHTML={
            {__html: props.data.markdownRemark.html}
        }/>
    </Layout>
}