import React from "react";
import styles from "./Bio.module.css";

function Bio(props) {

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={require('./bio_img/IMG_4971.JPG')} alt="Me" />
      <p>
        Personal Blog, by{" "}
        <a href="https://www.facebook.com/edenisntreal">Eden Lê</a>.
        <br /><br /> This is a small place where I want to write anything.<br />
      </p>
    </div>
  );
}

export default Bio;
