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
        Member of <a href="https://326.engineer">326 Engineering</a>,{" "}
        <a href="https://326.engineer">The Milkisian</a> 
        {' '} and{' '} Owner of {' '}
        <a href="https://studio225december.com">22.5 December Studio</a>.
      </p>
    </div>
  );
}

export default Bio;
