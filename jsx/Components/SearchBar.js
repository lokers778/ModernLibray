import React from "react"

class SearchBar extends React.Component {
    state = {
        searchedTerm: "",
        indexOnSearch:0,
        previousSearchedTerm:"",
    };
    onChange = (event) => {
        this.setState({searchedTerm: event.target.value})
    };
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchedTerm === "") {
            alert("The Search field cannot be empty !!")
        } else {
            this.props.onTermSubmit(this.state.searchedTerm,0)

        }
    };
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }
    onScroll=()=>{
        if(this.props.fetchedData===true){
            const bookList= document.querySelector(".book-list")
            if(bookList.getBoundingClientRect().bottom<=window.innerHeight){
this.setState({indexOnSearch:this.state.indexOnSearch+10})
                this.props.onTermSubmit(this.state.searchedTerm,this.state.indexOnSearch)
            }
        }
    }
    render() {
        return (
            <>
                <div className="search-bar">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" id="book" name="book" value={this.state.searchedTerm}
                               onChange={this.onChange} placeholder="Book title/author.." minLength="2"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar