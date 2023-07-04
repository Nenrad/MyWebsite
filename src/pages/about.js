import * as React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import photo from "../images/seanlookingcool.webp";
import linkedin from "../images/linkedinlogo.svg";
import twitter from "../images/twitterlogo.svg";
import github from "../images/githublogo.svg";
import * as styles from "../styles/about.module.css";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import "../styles/global.css";
export default function Home({ data }) {
  const recentPosts = data.allMarkdownRemark.nodes;
  const StyledLink = styled(Link)`
    color: black;
    font-weight: 700;
  `;
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.image_container}>
          <img
            style={{
              objectFit: "cover",
              width: "285px",
              height: "285px",
              borderRadius: "50%",
            }}
            src={photo}
          ></img>
          <div className={styles.icon_container}>
            <img src={linkedin}></img>
            <img src={twitter}></img>
            <img src={github}></img>
          </div>
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.title}>About</h1>
          <p>
            My name is Sean O’Gary. I am a student with aspirations to pursue
            research in physics and mathematics. I am currently studying at
            Borough of Manhattan Community college with a major in mathematics.
            I intend to transfer to a four-year college to double major in
            mathematics and physics. I enjoy studying these topics independently
            and will be tracking my studies <Link to={"/blog/"}>here</Link>. I
            also enjoy working on independent projects that allow me to apply
            the knowledge I gain which can be viewed{" "}
            <Link to={"/projects/"}>here</Link>. I sometimes condense my
            learnings through <Link to={"/blog/"}>blog posts</Link>.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            If you would like to reach out to me for any reason please use my
            contact form. I look forward to hearing from you!{" "}
          </p>{" "}
          <br />
          <p>
            Fancy a game of chess? Add me on chess.com:{" "}
            <Link to={"https://www.chess.com/member/ogarys"} target="_blank">
              Chess.com profile
            </Link>{" "}
          </p>{" "}
          <br />
          <p>
            Or go:{" "}
            <Link to={"https://online-go.com/player/967124/"} target="_blank">
              online-go profile
            </Link>{" "}
          </p>{" "}
          <br />
          <p>To view or download my resume/cv click here.</p>
          <div className={styles.post_container}>
            <h1>Recent</h1>
            {recentPosts.map((node) => (
              <div>
                <StyledLink
                  to={
                    node.fileAbsolutePath.includes("/blogposts/")
                      ? "/blogposts/" + node.frontmatter.slug
                      : "/projects/" + node.frontmatter.slug
                  }
                >
                  {node.fileAbsolutePath.includes("/blogposts/")
                    ? "Blog: " + node.frontmatter.title
                    : "Project: " + node.frontmatter.title}
                </StyledLink>{" "}
                <br />
                <span style={{ fontWeight: "400" }}>
                  {node.frontmatter.date ? node.frontmatter.date : "no date"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.copyright}>© 2023 Sean O'Gary</div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        fileAbsolutePath
      }
    }
  }
`;
