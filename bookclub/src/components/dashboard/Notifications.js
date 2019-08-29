import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props
    const notificationBox = notifications && notifications.map(item => {
        return(
            <li key={item.id}>
                <span className="green-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="grey-text notif-date">
                    {moment(item.time.toDate()).fromNow()}
                </div>
            </li>
        )
    })

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notificationBox}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications
