import React from "react";
import classnames from 'classnames';
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        { content: 'Hello', isLeft: true }
      ]
    }
  }

  componentDidMount(){
    let msg = document.querySelector('.message_input');
    let btnSend = document.querySelector('.send_message');
    
    btnSend.addEventListener('click', () => {
      if(msg.value !== ''){
        this.sendMessage(msg);
      }
    });

    msg.addEventListener('keyup', (ev) => {
      if(ev.which === 13 && msg.value !== ''){
        this.sendMessage(msg);
      }
    });
  }

  sendMessage(msg){
    let sectorMsg = document.querySelector('.messages');

    let { messages } = this.state;

    let newMsg = {};
    newMsg.content = msg.value;
    newMsg.isLeft = !messages[messages.length - 1].isLeft;

    this.setState({
      messages: messages.concat(newMsg)
    });

    msg.value = '';
    sectorMsg.scrollTo(0, sectorMsg.scrollHeight);
  }

  render() {
    let { messages } = this.state;

    return (
      <div className="App">
        <div className="chat_window">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close"></div>
              <div className="button minimize"></div>
              <div className="button maximize"></div>
            </div>
            <div className="title">Chat</div>
          </div>
          <ul className="messages">
            {
              this.state.messages.length > 0 && messages.map((item, index) => {
                
                let direct = (item.isLeft === true) ? 'left' : 'right';

                return (
                  <li key={index} className={classnames('message', 'appeared', direct)} >
                    <div className="avatar"></div>
                    <div className="text_wrapper">
                      <div className="text">{item.content}</div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
              <input
                className="message_input"
                placeholder="Type your message here..."
              />
            </div>
            <div className="send_message">
              <div className="icon"></div>
              <div className="text">Send</div>
            </div>
          </div>
        </div>
        <div className="message_template">
          <li className="message">
            <div className="avatar"></div>
            <div className="text_wrapper">
              <div className="text"></div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default App;
