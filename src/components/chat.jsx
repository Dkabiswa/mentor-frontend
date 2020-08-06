import React from 'react';
import OutGoing from './outgoingMsg';
import InComing from './incomingMsg';

const Chat = ({ userMessages }) => {
  const displayMessages = () => {
    const { messages } = userMessages
    return messages.map((m, i)=> m.sender==='you'
    ? <OutGoing message={m.message} key={i + 'm'}/>
    : <InComing message={m.message} key={i + 'm'}/>)
  }

  return (
    userMessages.user? <div className="mesgs col-md-8">
      <div className="card-header mb-2">
        {userMessages.user}
      </div>
      <div className="msg_history">
      <div className="row">
        {displayMessages()}
      </div>
      </div>
      <div className="type_msg">
        <div className="input_msg_write">
          <input type="text" className="write_msg" placeholder="Type a message" />
          <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>: null
  )
}

export default Chat;