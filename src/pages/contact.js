import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";
export default function Home() {
  return (
    <Layout>
      <h1 className={styles.page_title}>Contact Me</h1>
      <form
        method="post"
        action="https://getform.io/f/9178a0e7-0872-45d8-b2cf-dfcf6a0dc93e"
        className={styles.form}
      >
        <label>
          Email <br />
          <input className={styles.email} type="email" name="email" />
        </label>
        <label>
          Name <br />
          <input className={styles.name} type="text" name="name" />
        </label>
        <label>
          Message: <br />
          <textarea
            className={styles.input}
            type="text"
            id="message"
            name="message"
          ></textarea>
        </label>
        <button className={styles.submit}>Submit</button>
      </form>
    </Layout>
  );
}
