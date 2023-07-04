import React from "react";
import Navbar from "../components/Navbar";
import * as styles from "../styles/layout.module.css";

export default function layout({ children }) {
  return (
    <div className={styles.whole_layout}>
      <div className={styles.navbar}>
        <Navbar className={styles.nav} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
