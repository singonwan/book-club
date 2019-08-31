import React from 'react'
import moment from 'moment'
import DeleteBookpost from './DeleteBookpost';

const BookpostSummary = ({bookpost}) => {
    //decided where to place the button
    return (
        <div className="card z-depth-0 bookpost-summary">
            <div className="card-content grey-text text-darken-3">
                <DeleteBookpost bookpost={bookpost} />
                <span className="class-title">{bookpost.title}</span>
                <p>Posted by {bookpost.authorFirstName} {bookpost.authorLastName}</p>
                <p className="grey-text">{moment(bookpost.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default BookpostSummary
