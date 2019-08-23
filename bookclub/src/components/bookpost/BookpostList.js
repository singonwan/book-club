import React from 'react'
import BookpostSummary from './BookpostSummary'

const BookpostList = () => {
    return (
        <div className="bookpost-list section">
            <BookpostSummary />
            <BookpostSummary />
            <BookpostSummary />
        </div>
    )
}

export default BookpostList
