import React from "react";
import "./App.css";
import ThumbImg from './components/ThumbImg';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      path: '/pic/5.jpg'
    }
  }

  componentDidMount(){
    let thumbImg = document.querySelectorAll('.thumb-img .pic img');
    thumbImg.forEach((item) => {
      item.addEventListener('click', (ev) => {
        this.setState({ path: ev.target.src })
      })
    })
  }

  render(){
    const { path } = this.state;

    return (
      <div className="container">
        <div className="left">
          <ThumbImg path={'/pic/1.jpg'} />
          <ThumbImg path={'/pic/2.jpg'} />
          <ThumbImg path={'/pic/3.jpg'} />
        </div>
        <div className="center">
          <div className="show-img">
            <div className="pic">
              <img src={path} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <ThumbImg path={'/pic/4.jpg'} />
          <ThumbImg path={'/pic/5.jpg'} />
          <ThumbImg path={'/pic/6.jpg'} />
        </div>
      </div>
    );
  }
}

export default App;
