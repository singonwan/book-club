import React, { Component } from 'react'
import Notifications from './Notifications'
import BookpostList from '../bookpost/BookpostList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { bookposts } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BookpostList bookposts={bookposts}/>
                    </div> 
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //state.bookpost(rootreducer).bookposts(bookpostreducer)
    return {
        bookposts: state.bookpost.bookposts
    }
}

//dashboard grabbing the data from redux state as component props
export default connect(mapStateToProps)(Dashboard)
