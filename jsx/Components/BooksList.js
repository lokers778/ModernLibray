import React from "react"
import BookItem from "./BookItem";

class BooksList extends React.Component {

    listOfBooks() {
        const bookList = this.props.books.map((book, index) => {
            return <BookItem key={index} book={book}/>
        });
        return bookList
    }

    bookList = <h2>Waiting for user Term...</h2>;

    componentDidUpdate() {
        if (this.props.fetchedData == null) {
            this.bookList = <h1>loading</h1>
        } else {
            this.bookList = this.listOfBooks()
        }
    }

    render() {
        return (
            <>
                <h2>Book List</h2>
                <div className="book-list">
                    {this.bookList}
                </div>
            </>

        )
    }
}

export default BooksList