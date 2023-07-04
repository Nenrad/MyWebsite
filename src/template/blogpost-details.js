import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/blogpost.module.css";
require(`katex/dist/katex.min.css`);

export default function projectDetails({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.post_container}>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        slug
        title
      }
      html
    }
  }
`;
