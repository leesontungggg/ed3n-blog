import React from 'react';
import posed from 'react-pose';

const Div = posed.div ({
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
  draggable: true,
  //   hoverable: true,
  //   init: { scale: 1 },
  //   hover: { scale: 1.5 }
});

class DragableXImage extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      hovering: false,
    };
  }

  render () {
    return (
      <Div style={{paddingTop: 100, paddingBottom: 100}}>
        <img
          src={this.props.url}
          style={{width: 450, transform: `${this.props.needRotate ? "rotate(90deg)" : "rotate(0deg)"}`}}
        />
      </Div>
    );
  }
}

export default DragableXImage;
