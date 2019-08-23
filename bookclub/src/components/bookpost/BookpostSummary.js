import React from 'react'

const BookpostSummary = ({bookpost}) => {
    return (
        <div className="card z-depth-0 bookpost-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="class-title">{bookpost.title}</span>
                <p>Posted by GWAN</p>
                <p className="grey-text">23 august</p>
            </div>
        </div>
    )
}

export default BookpostSummary
