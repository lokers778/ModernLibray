import React from "react"

class BookItem extends React.Component {
    render() {
        console.log(this.props.book)
        return (
            <div className="Book">
                <h3>Title:{this.props.book.volumeInfo.title}</h3>
                <h3>Author:{this.props.book.volumeInfo.authors||"Anonymous Author"}</h3>
                <img src={this.props.book.volumeInfo.imageLinks.thumbnail||""} alt={this.props.book.volumeInfo.title} title={this.props.book.volumeInfo.title}/>
                <div><p>{(this.props.book.searchInfo!==undefined)?this.props.book.searchInfo.textSnippet:"TU WSTAW OPIS"}</p><span>{this.props.book.volumeInfo.publishedDate}, {this.props.book.volumeInfo.publisher}</span></div>
            </div>
        )

    }
}

export default BookItem

