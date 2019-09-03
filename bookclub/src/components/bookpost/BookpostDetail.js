import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteBookpost } from '../../store/actions/bookpostActions'

class BookpostDetail extends Component {
    handleDeleteClick = (e) => {
        this.props.deleteBookpost(this.props.match.params.id)
        this.props.history.push('/') 
    }
    handleEditClick = (e) => {
        this.props.editBookpost(this.props.match.params.id)
        // this.props.history.push('/')
    }
    render(){
        const { bookpost, auth } = this.props;
        //needa delete from here //check if authorid to display the crossbtn. ternary operator?
        //{ authError ? <p>{ authError}</p> : null}
        //state.firebase.auth.uid == bookpost.authorId
        const crossbtn = <p align='right' onClick={this.handleDeleteClick} ><i className="material-icons">clear</i></p>
        const editbtn = <p align='right' onClick={this.handleEditClick} ><i className="material-icons">edit</i></p> 
        
        if (!auth.uid) return <Redirect to='/signin' /> //route guarding
        //check if user is the author of this post. 
        if (bookpost) {
            // console.log('bookpost2', bookpost.authorId)
            // console.log('bookpost', auth.uid)
            return (
                <div className="container section bookpost-detail">
                    <div className="card z-depth-0">
                        <div className="card-content">
                                
                                { auth.uid === bookpost.authorId ? crossbtn : null}

                                <span className="card-title">{ bookpost.title }</span>
                                <p>{ bookpost.content }</p>
                                { auth.uid === bookpost.authorId ? editbtn : null}
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
    //const id = ownProps.match.params.id; 
    return {
        deleteBookpost: (id) => dispatch(deleteBookpost(id))
        editBookpost: (id) => dispatch(editBookpost(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'bookposts' }
    ])
)(BookpostDetail)
