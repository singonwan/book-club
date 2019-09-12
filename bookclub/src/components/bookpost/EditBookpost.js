import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBookpost } from '../../store/actions/bookpostActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class EditBookpost extends Component {

     //need to prepopulate state
    state = {
        title: this.props.bookposts[this.props.match.params.id].title,
        content:this.props.bookposts[this.props.match.params.id].content
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {   
        e.preventDefault();
        this.props.editBookpost(this.state, this.props.match.params.id)
        this.props.history.push('/') //redirect to homepage after editing post
    }
    render() {
        // console.log('state', this.state)  
        const { auth, bookposts } = this.props
        if (!auth.uid) return <Redirect to='/signin' /> //route guarding
        // console.log("props", this.props)
        
        //think of ways of guarding other users from entering /edit/:id to edit your bookpost. ****
        //ERROR: After refreshing the page, bookposts becomes undefined ****

        const postid = this.props.match.params.id;
        const bookpost = bookposts[postid];
        // console.log("bookpost", bookpost)

        const cval = bookpost.content;
        const tval = bookpost.title;


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Edit BookPost</h5>
                    <div className="input-field">
                        <label htmlFor="title">Book Title</label>
                        <input type="text" id="title" defaultValue={tval} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Bookpost Content</label>
                        <textarea id="content" className="materialize-textarea" defaultValue={cval} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn brown darken-1 z-depth-0">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("mapstate", state);
    return {      
        auth: state.firebase.auth,
        bookposts: state.firestore.data.bookposts
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        editBookpost: (bookpost, id) => dispatch(editBookpost(bookpost, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'bookposts' }
    ])
)(EditBookpost)
