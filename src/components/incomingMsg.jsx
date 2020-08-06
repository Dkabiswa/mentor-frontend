import React from 'react';

const InComing = ({ message, time}) => {
    return (
      <>
        <div className="col-sm-8">
          <div class="received_withd_msg">
            <p>{message}</p>
            <span class="time_date"> 11:01 AM    |    Today</span>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </>
    )
}

export default InComing;