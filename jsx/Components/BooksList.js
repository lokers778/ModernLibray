import React from "react"
import BookItem from "./BookItem";

class BooksList extends React.Component {
    render() {
        return (
            <>
                <h2>bookList</h2>
                <BookItem/>
                <BookItem/>
                <BookItem/>
            </>
        )
    }
}

export default BooksList