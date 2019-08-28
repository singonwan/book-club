import React from 'react'
import BookpostSummary from './BookpostSummary'
import { Link } from 'react-router-dom'

const BookpostList = ({bookposts}) => {
    return (
        <div className="bookpost-list section">
            { bookposts && bookposts.map(bookpost => {
                return(
                    <Link to={'/bookpost/' + bookpost.id} key={bookpost.id}>
                        <BookpostSummary bookpost={bookpost} />
                    </Link>
                )
            })}
        </div>
    )
}

export default BookpostList