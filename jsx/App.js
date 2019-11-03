import React from "react"
import ReactDOM from "react-dom"
import "../scss/main.scss"
import BooksList from "./Components/BooksList";
import SearchBar from "./Components/SearchBar";


class App extends React.Component {
    state = {
        booksOnSite: [],
        booksToRender: [],
        fetchedData: false,
        searchBy: "",
    };

    key = "AIzaSyBLv1octUyNyewb6R2pf2jrq5c0-cgxhbY"

    onTermSubmit = (term, index = 0) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchBy}:${term}:&startIndex=${index}&key=${this.key}&maxResults=10`, {})
            .then(res => res.json())
            .catch((err) => {
                console.log("Problem with connection to data base")
            })
            .then(res => this.setState({booksToRender: res.items}))
            .then(() => this.setState({booksOnSite: [...this.state.booksOnSite, ...this.state.booksToRender]}))
            .catch((err) => {
                alert("Sorry we cant find any results")
            })
            .then(() => {
                this.setState({fetchedData: true})
            })

    };

    onNewTerm = () => {
        this.setState({
            booksOnSite: [],
        })
    };
    onSearchBy = (param) => {
        this.setState({
            searchBy: param,
        })

    };

    render() {
        return (
            <div className="container">
                <h1>Modern Libray</h1>
                <SearchBar onTermSubmit={this.onTermSubmit} fetchedData={this.state.fetchedData}
                           onNewTerm={this.onNewTerm} onSearchBy={this.onSearchBy}/>
                <BooksList books={this.state.booksOnSite}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))