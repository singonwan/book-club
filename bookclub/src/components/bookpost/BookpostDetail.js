import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const BookpostDetail = (props) => {
    const { bookpost, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' /> //route guarding

    if (bookpost) {
        return (
            <div className="container section bookpost-detail">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ bookpost.title }</span>
                        <p>{ bookpost.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 brown-text">
                        <div>Posted by { bookpost.authorFirstName } {bookpost.authorLastName }</div>
                        <div>23 august</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (   
            <div className="container center">
                <p>Loading Bookpost...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const bookposts = state.firestore.data.bookposts;
    const bookpost = bookposts ? bookposts[id] : null
    return {
        bookpost: bookpost, //now BookpostDetail will have a prop called bookpost!
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bookposts' }
    ])
)(BookpostDetail)
