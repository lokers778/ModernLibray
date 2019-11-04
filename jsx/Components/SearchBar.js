import React from "react"

class SearchBar extends React.Component {
    state = {
        searchedTerm: "",
        indexOnSearch: 0,
        previousSearchedTerm: "",
        searchTopic: "",
        previousSearchedTopic: ""
    };

    onChange = (event) => {
        this.setState({searchedTerm: event.target.value})
    };

    onSubmit = (event) => {
        this.setState({previousSearchedTopic: this.state.searchTopic})
        this.setState({previousSearchedTerm: this.state.searchedTerm})
        event.preventDefault();
        if (this.state.searchedTerm === "") {
            alert("The Search field cannot be empty !!")
        } else {
            if (this.state.previousSearchedTerm !== this.state.searchedTerm) {
                this.props.onNewTerm()
            }
            if (this.state.previousSearchedTerm === this.state.searchedTerm && this.state.previousSearchedTopic === this.state.searchTopic) {
                return
            }
            if (this.state.previousSearchedTerm === this.state.searchedTerm && this.state.previousSearchedTopic !== this.state.searchTopic) {
                this.props.onNewTerm()
            }
            this.props.onTermSubmit(this.state.searchedTerm, 0)

        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (this.props.fetchedData === true) {
            const bookList = document.querySelector(".book-list")
            if (bookList.getBoundingClientRect().bottom <= window.innerHeight) {
                this.setState({indexOnSearch: this.state.indexOnSearch + 10})
                this.props.onTermSubmit(this.state.searchedTerm, this.state.indexOnSearch)
            }
        }
    }
    changeSearchTopic = (e) => {
        this.setState({searchTopic: e.target.value}, () => {
            this.props.onSearchBy(this.state.searchTopic)
        });

    }

    render() {
        return (
            <>
                <div className="search-bar">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" id="book" name="book" value={this.state.searchedTerm}
                               onChange={this.onChange} placeholder="Book title/author.." minLength="2"/>
                        <button type="submit">Search</button>
                        <select id="searchTopic" value={this.state.searchTopic} onChange={this.changeSearchTopic}>
                            <option value="intitle">Title</option>
                            <option value="inauthor">Author</option>
                            <option value="inpublisher">Publisher</option>
                            <option value="subject">Subject</option>
                            <option value="isbn">Isbn</option>
                        </select>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar