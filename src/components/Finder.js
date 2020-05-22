import React from 'react';

function Finder(props) {
    console.log(props)
    return(
        <div className="books-container">
            <img src= {props.book.img} alt={`Book cover for ${props.book.title} `} />
            <h3>{props.book.title}</h3>
            <p><span>Year:</span> {props.book.year}</p>
            <p><span>Pages:</span> {props.book.pageCount}</p>
            <p><span>Review:</span> {props.book.review}</p>
            <button>Add Review</button>
            <button>Remove Book</button>
        </div>
    )
}

export default Finder;