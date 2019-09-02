import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookpost } from '../../store/actions/bookpostActions'
import { Redirect } from 'react-router-dom'

class CreateBookpost extends Component {
    
    state = {
        title:'',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        
        e.preventDefault();
        // console.log(this.state);
        this.props.createBookpost(this.state)
        this.props.history.push('/') //redirect to homepage after creating post
    }
    render() {
        console.log('createbookpost', this.props)
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' /> //route guarding

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New BookPost</h5>
                    <div className="input-field">
                        <label htmlFor="title">Book Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Bookpost Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn brown darken-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        createBookpost: (bookpost) => dispatch(createBookpost(bookpost))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookpost)
