import React from "react"

class SearchBar extends React.Component {
   state={
       searchedTerm:""
   }
onChange=(event)=>{
       this.setState({searchedTerm:event.target.value})
}
onSubmit=(event)=>{
       event.preventDefault();

    this.props.onTermSubmit(this.state.searchedTerm)
}
    render() {
        return (
            <>
                <div className="search-bar">
                    <form onSubmit={this.onSubmit}>
                        <div className="search-bar-input-field">
                            <label>Book Search
                                <input type="text" id="book" name="book" value={this.state.searchedTerm} onChange={this.onChange}/>
                            </label>
                        </div>
                        <button type="submit" value="send"/>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar