import React, {useState} from 'react';
import Header from '../components/header'
import Chat from '../components/chat';
import Recent from '../components/recentMsg';

const messages = {
  'james kata': [{
    sender: 'james kata',
    receiver: 'you',
    message: 'i will see you tommorrow',
    date: '25 Oct'
  },
  {
    receiver: 'james kata',
    sender: 'you',
    message: 'Make sure tommorow is tomorrow',
    date: '25 Oct'
  },
  {
    sender: 'james kata',
    receiver: 'you',
    message: 'Relax i willl give you the money',
    date: '25 Oct'
  },
  {
    receiver: 'james kata',
    sender: 'you',
    message: 'Cool lets wait and see',
    date: '25 Oct'
  }],
  'karole kasita': [{
    sender: 'karole kasita',
    receiver: 'you',
    message: 'You left your things on the counter come pick them up',
    date: '25 Dec'
  },
  {
    receiver: 'karole kasita',
    sender: 'you',
    message: 'i will see you tommorrow',
    date: '25 Oct'
  },
  {
    sender: 'karole kasita',
    receiver: 'you',
    message: 'I wont be here tommorrow maybe saturday',
    date: '25 Oct'
  },
  {
    receiver: 'karole kasita',
    sender: 'you',
    message: 'How will fish stay freshtill saturday',
    date: '25 Oct'
  }]
}


const Messages = () => {
  const [activeDiv, setActiveDiv] = useState(0)
  const [currMessages, setCurrMessages] = useState({})

  const handleClick = (i, user) => {
    setActiveDiv(i)
    setCurrMessages({
      user,
      messages: messages[user]
    })
  }

  const displayRecent = (m) => {
    const recentMsgs = Object.keys(m)
    return recentMsgs.map((rm, index) => {
      const data = {
        name: rm,
        date: m[rm][0].date,
        message: m[rm][0].message
      }
      return <Recent
        key={index+rm[0]}
        data={data}
        classes={activeDiv===index? 'active_chat' : ''}
        index={index}
        user={rm}
        onclick={handleClick}
      />
    })
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="slim-pagetitle ">Messages</h1>
        <div className="messaging">
        <div className="inbox_msg row">
          <div className="inbox_people col-md-4">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input type="text" className="search-bar"  placeholder="Search" />
                  <span className="input-group-addon">
                  <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                  </span> </div>
              </div>
            </div>
            <div className="inbox_chat">
              {displayRecent(messages)}
            </div>
          </div>

          <Chat userMessages={currMessages} />
        </div>

      </div>
      </div>
    </>
  )
}

export default Messages;