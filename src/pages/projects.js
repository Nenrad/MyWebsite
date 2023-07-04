import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import * as styles from "../styles/projects.module.css";
export default function Home({ data }) {
  const StyledLink = styled(Link)`
    color: black;
    font-weight: 700;
  `;
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <h1 className={styles.page_title}>Projects</h1>
      <div className={styles.post_container}>
        {projects.map((node) => (
          <div>
            <StyledLink to={"/projects/" + node.frontmatter.slug}>
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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
