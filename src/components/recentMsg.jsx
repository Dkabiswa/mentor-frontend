import React from 'react';

const Recent = ({data, classes, index, onclick, user}) => {
    return (
    <div onClick={()=>onclick(index, user)} className={`chat_list ${classes}`}>
        <div className='chat_people'>
        <div className='chat_img'> <img src='https://ptetutorials.com/images/user-profile.png' alt='profile'/> </div>
        <div className='chat_ib'>
            <h5>{data.name}<span className='chat_date'>{data.date}</span></h5>
            <p>{data.message.substring(0, 20) + '...'}</p>
        </div>
        </div>
    </div>
    )
}

export default Recent;