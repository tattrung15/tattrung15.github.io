import React from "react";

class ThumbImg extends React.Component {
  render() {
    return (
      <div className="thumb-img">
        <div className="pic">
          <img src={this.props.path} alt="" />
        </div>
      </div>
    );
  }
}

export default ThumbImg;
