import React from 'react';
import moment from 'moment';
const Notifications =(props) => {
    const {notifications} =  props;
    const notificationsList = notifications && notifications.map(not => {
        return (
            <li key = {not.id}>
                <span className="pink-text">{not.user} </span>
                <span>{not.content}</span>
                <div className="grey-text-note-date">
                    {moment(not.time.toDate()).fromNow()}
                </div>
            </li>
        )
    })
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Notifications</span>
                        <ul>
                           {notificationsList}
                        </ul>                   
                </div>
            </div>
        </div>
    )
}

export default Notifications;