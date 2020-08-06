import React from 'react';

const OutGoing = ({message, time}) => {
    return (
      <>
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <div class="outgoing_msg">
            <div class="sent_msg">
              <p>{message}</p>
              <span class="time_date"> 11:01 AM    |    Today</span> </div>
          </div>
        </div>
      </>
    )
}

export default OutGoing;