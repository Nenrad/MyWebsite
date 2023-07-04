import * as React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/blog.module.css";
import styled from "styled-components";
export default function Home({ data }) {
  const StyledLink = styled(Link)`
    color: black;
    font-weight: 700;
  `;
  const blogposts = data.allMarkdownRemark.nodes;
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("RAN RAN RAN RAN");
  });
  return (
    <Layout>
      <h1 className={styles.page_title}>Blog</h1>
      <div className={styles.post_container}>
        {blogposts.map((node) => (
          <div>
            <StyledLink to={"/blogposts/" + node.frontmatter.slug}>
              {node.frontmatter.title}
            </StyledLink>{" "}
            <br />
            <span style={{ fontWeight: "400" }}>{node.frontmatter.date}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blogposts/" } }) {
      nodes {
        frontmatter {
          slug
          date
          title
        }
      }
    }
  }
`;
