import React from 'react'
import { connect } from 'react-redux'
import { deleteBookpost } from '../../store/actions/bookpostActions'

function DeleteBookpost({ bookpost, deleteBookpost }) {
    //onClick, props.deleteBookpost
    //problem: clickin on cross means clicking on post too. need to find a solution

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
