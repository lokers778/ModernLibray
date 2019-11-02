import React from "react"
import ReactDOM from "react-dom"
import "../scss/main.scss"
import BooksList from "./Components/BooksList";
import SearchBar from "./Components/SearchBar";
const key="AIzaSyBLv1octUyNyewb6R2pf2jrq5c0-cgxhbY"
class App extends React.Component {
    state={
        booksOnSite:[],
        booksToRender:[],
        fetchedData:false,
    };
onTermSubmit=(term,index=0)=> {
    console.log(term)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${index}&key=${key}&maxResults=10`,{
    })
        .then(res=>res.json())
        .then(res=>this.setState({booksToRender:res.items}))
        .then(()=>this.setState({booksOnSite:[...this.state.booksOnSite,...this.state.booksToRender]}))
        .then(()=>{this.setState({fetchedData:true})})
}


    render() {
        return (
            <div className="container">
                <h1>Modern Libray</h1>
                <SearchBar onTermSubmit={this.onTermSubmit} fetchedData={this.state.fetchedData} />
                <BooksList books={this.state.booksOnSite}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))