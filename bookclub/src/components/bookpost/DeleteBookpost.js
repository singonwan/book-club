import React from 'react'
import { connect } from 'react-redux'
import { deleteBookpost } from '../../store/actions/bookpostActions'

function DeleteBookpost({ bookpost, deleteBookpost }) {

    //the bookpost is passed in
    //delete bookpost and the redirect back to dashboard. 

    return (
        <p onClick={() => deleteBookpost(bookpost)} align='right'> <i className="material-icons">clear</i></p> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBookpost: (bookpost) => dispatch(deleteBookpost(bookpost))
    }
}

export default connect(null, mapDispatchToProps)(DeleteBookpost)
