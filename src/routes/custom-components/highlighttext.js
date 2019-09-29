import React from "react";
import posed from "react-pose";

const Square = posed.div({
  //   fullscreen: {
  //     width: "100vh",
  //     height: "100vh",
  //     transition: tween
  //   },
  //   idle: {
  //     width: 100,
  //     height: 100,
  //     transition: tween
  //   }
//   draggable: "x",
//   dragBounds: { left: "-100%", right: "100%" },
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.5 }
});

class HighLightText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };
  }

  render() {
    return (
      <Square
        pose={this.state.hovering ? "hovered" : "idle"}
        onMouseEnter={() => {
          console.log("entered");
          this.setState({ horvering: true });
        }}
        onMouseLeave={() => {
          console.log("left");
          this.setState({ horvering: false });
        }}
        style={{
          padding: "20px",
          backgroundColor: this.props.color,
          color: "white"
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: 0, userSelect: 'none' }}>{this.props.value}</h3>
      </Square>
    );
  }
}

export default HighLightText;
