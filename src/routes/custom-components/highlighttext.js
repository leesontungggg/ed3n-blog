import React from "react";

let HighLightText = (props) => {
  return (
    <div style={{ padding: "20px", backgroundColor: props.color , color: "white" }}>
      <h3 style={{ marginTop: 0, marginBottom: 0 }}>
        {props.value}
      </h3>
    </div>
  );
};

export default HighLightText