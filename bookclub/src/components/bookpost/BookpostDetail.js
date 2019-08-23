import React from 'react'

const BookpostDetail = (props) => {
    const id = props.match.params.id;
    return (   
        <div className="container section bookpost-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Bookpost Title - id : {id}</span>
                    <p>blah blah blah</p>
                </div>
                <div className="card-action grey lighten-4 brown-text">
                    <div>Posted by Gwanolds</div>
                    <div>23 august</div>
                </div>
            </div>
        </div>
    )
}

export default BookpostDetail
