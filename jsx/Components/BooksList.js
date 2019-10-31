import React from "react"
import BookItem from "./BookItem";

const BooksList = (props) => {


    const listOfBooks = props.books.map((book) => {
        return <BookItem key={book.id} book={book}/>
    });
    return (
        <>
            <h2>bookList</h2>
            <div>
                {listOfBooks}
            </div>
        </>

    )
}

export default BooksList