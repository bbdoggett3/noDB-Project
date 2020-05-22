import React from 'react';
import Review from './Review';

function Finder(props) {
    const booksMap = props.books.map((element) => (
        <Review key={element.id}
                editReview = {props.editReview}
                removeBook = {props.removeBook}
                data = {element}
        />
    ))
 
    return(
        <div>
            {booksMap}
        </div>
    )
}

export default Finder;