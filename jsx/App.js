import React from "react"
import ReactDOM from "react-dom"
import "../scss/main.scss"
import BooksList from "./Components/BooksList";
import SearchBar from "./Components/SearchBar";
const key="AIzaSyBLv1octUyNyewb6R2pf2jrq5c0-cgxhbY"
class App extends React.Component {
    state={books:[]};
onTermSubmit=(term,index=0)=> {
    console.log(term)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${index}&key=${key}&maxResults=40`,{
    })
        .then(res=>res.json())
        .then(res=>this.setState({books:res.items}))
        .then(()=>{console.log(this.state.books)})
}

    render() {
        return (
            <div>
                <h1>Modern Libray</h1>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <BooksList books={this.state.books}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))