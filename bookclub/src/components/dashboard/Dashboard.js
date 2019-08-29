import React, { Component } from 'react'
import Notifications from './Notifications'
import BookpostList from '../bookpost/BookpostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { bookposts, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> //route guarding

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BookpostList bookposts={bookposts}/>
                    </div> 
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //state.bookpost(rootreducer).bookposts(bookpostreducer)
    return {
        bookposts: state.firestore.ordered.bookposts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

//dashboard grabbing the data from redux state as component props
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bookposts', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
