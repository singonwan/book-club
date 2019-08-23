import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookpost } from '../../store/actions/bookpostActions'

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
    }
    render() {
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

const mapDispatchToProps = (dispatch) => { 
    return {
        createBookpost: (bookpost) => dispatch(createBookpost(bookpost))
    }
}

export default connect(null, mapDispatchToProps)(CreateBookpost)
