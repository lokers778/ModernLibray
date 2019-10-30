import React from "react"
import ReactDOM from "react-dom"
import "../scss/main.scss"
import BooksList from "./Components/BooksList";
import SearchBar from "./Components/SearchBar";
const key="AIzaSyBLv1octUyNyewb6R2pf2jrq5c0-cgxhbY"
class App extends React.Component {

    // fetch()

    render() {
        return (
            <div>
                <h1>Modern Libray</h1>
                <SearchBar/>
                <BooksList/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))