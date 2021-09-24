import React from "react";
import "./App.css";
import ThumbImg from "./components/ThumbImg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/pic/5.jpg",
    };
    this.thumbShow = React.createRef();
    this.images = [
      "/pic/1.jpg",
      "/pic/2.jpg",
      "/pic/3.jpg",
      "/pic/4.jpg",
      "/pic/5.jpg",
      "/pic/6.jpg",
    ];
    this.handleOnClickThumb = this.handleOnClickThumb.bind(this);
  }

  handleOnClickThumb(e) {
    this.thumbShow.current.src = e.target.src;
  }

  componentDidMount() {}

  render() {
    const { path } = this.state;

    return (
      <div className="container">
        <div className="left">
          {this.images.slice(0, 3).map((item, index) => (
            <ThumbImg
              key={index}
              onClick={this.handleOnClickThumb}
              path={item}
            />
          ))}
        </div>
        <div className="center">
          <div className="show-img">
            <div className="pic">
              <img ref={this.thumbShow} src={path} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          {this.images.slice(3, 6).map((item, index) => (
            <ThumbImg
              key={index}
              onClick={this.handleOnClickThumb}
              path={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
