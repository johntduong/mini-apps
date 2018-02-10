import React, { Component } from "react";
import images from "../data.json";

class Carousel extends Component {
  render() {
    return (
      <div className="slider">
        <figure>
          <img
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg`}
            alt
          />
          <img
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg`}
            alt
          />
          <img
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg`}
            alt
          />
          <img
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ankor-wat.jpg`}
            alt
          />
          <img
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg`}
            alt
          />
        </figure>
      </div>
    );
  }
}

export default Carousel;
