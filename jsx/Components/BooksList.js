import React from "react"
import BookItem from "./BookItem";

const BooksList = (props) => {

    const listOfBooks = props.books.map((book,index) => {
        return <BookItem key={index} book={book}/>
    });

    return (
        <>
            <h2>bookList</h2>
            <div className="book-list">
                {listOfBooks}
            </div>
        </>

    )
}

export default BooksList