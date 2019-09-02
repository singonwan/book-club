import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteBookpost } from '../../store/actions/bookpostActions'

class BookpostDetail extends Component {
    handleClick = (e) => {
        this.props.deleteBookpost(this.props.match.params.id)
        this.props.history.push('/') 
    }
    render(){
        const { bookpost, auth } = this.props;
        //needa delete from here

        
        
        if (!auth.uid) return <Redirect to='/signin' /> //route guarding
        console.log('details', this.props)
        if (bookpost) {
            return (
                <div className="container section bookpost-detail">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            {/* <DeleteBookpost bookpost={bookpost} id={props.match.params.id} /> */}
                            <p align='right' onClick={this.handleClick} >
                                <i className="material-icons">clear</i>
                            </p> 
                            <span className="card-title">{ bookpost.title }</span>
                            <p>{ bookpost.content }</p>
                        </div>
                        <div className="card-action grey lighten-4 brown-text">
                            <div>Posted by { bookpost.authorFirstName } {bookpost.authorLastName }</div>
                            <div>{moment(bookpost.createdAt.toDate()).calendar()}</div>
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
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id; //id of the post
    const bookposts = state.firestore.data.bookposts;
    const bookpost = bookposts ? bookposts[id] : null
    return {
        bookpost: bookpost, //now BookpostDetail will have a prop called bookpost!
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id; 
    return {
        deleteBookpost: (id) => dispatch(deleteBookpost(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'bookposts' }
    ])
)(BookpostDetail)
