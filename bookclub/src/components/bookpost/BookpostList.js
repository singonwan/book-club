import React from 'react'
import BookpostSummary from './BookpostSummary'

const BookpostList = ({bookposts}) => {
    return (
        <div className="bookpost-list section">
            { bookposts && bookposts.map(bookpost => {
                return(
                    <BookpostSummary bookpost={bookpost} key={bookpost.id}/>
                )
            })}
        </div>
    )
}

export default BookpostList