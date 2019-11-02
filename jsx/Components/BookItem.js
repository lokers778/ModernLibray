import React from "react"

class BookItem extends React.Component {

    render() {
        return (
            <div className="book-item">
                <h3>Title:{this.props.book.volumeInfo.title || "Ukknow title"}</h3>
                <h3>Author:{this.props.book.volumeInfo.authors || "Anonymous Author"}</h3>
                <div>
                    <img
                        src={(this.props.book.volumeInfo.imageLinks !== undefined) ? this.props.book.volumeInfo.imageLinks.smallThumbnail : "../../assets/BookImage.png"}
                        alt={this.props.book.volumeInfo.title||"Ukknow title"} title={this.props.book.volumeInfo.title||"Ukknow title"}/>
                    <p>{(this.props.book.volumeInfo.description !== undefined) ? this.props.book.volumeInfo.description : "Sorry we do not have a description available."}</p>
                </div>
                <span>Published ind :{this.props.book.volumeInfo.publishedDate || "Uknown date"}, by : {this.props.book.volumeInfo.publisher || "Uknown Publisher"}</span>
            </div>

        )

    }
}

export default BookItem

