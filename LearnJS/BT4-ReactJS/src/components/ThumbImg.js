import React from "react";

class ThumbImg extends React.Component {
  render() {
    const { path, onClick } = this.props;

    return (
      <div className="thumb-img">
        <div className="pic">
          <img
            onClick={onClick}
            style={{ objectFit: "cover" }}
            src={path}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default ThumbImg;
