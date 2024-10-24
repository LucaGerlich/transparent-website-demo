"use client";

import Head from "next/head";
import { useEffect } from "react";
import styles from "./styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // Select all elements within the main container
    document.querySelectorAll("#main-container *").forEach((element) => {
      // Get the tag name in lowercase
      const tagName = element.tagName.toLowerCase();
      // Set the data-tag attribute
      element.setAttribute("data-tag", tagName);
    });
  }, []);

  return (
    <div id="main-container" className={styles.container}>
      <Head>
        <title>Transparent Website</title>
      </Head>
      <h1>Welcome to My Website</h1>
      <p>This is a paragraph explaining what my website is about.</p>
      <div>
        <h2>About Me</h2>
        <p>Some information about me.</p>
      </div>
    </div>
  );
}
