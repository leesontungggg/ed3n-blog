import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "leesontungggg@gmail.com",
    size: 300
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        Personal Blog, by{" "}
        <a href="https://www.facebook.com/edenisntreal">Eden Lê</a>.
        <br />I explain everything I learn into writing. <br />
      </p>
    </div>
  );
}

export default Bio;
