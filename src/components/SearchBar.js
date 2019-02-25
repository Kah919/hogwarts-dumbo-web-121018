import React, { Component } from "react";

class SearchBar extends Component {

  createSearchBar = () => {
    return (
        <input type="text" placeholder="Search Name..." onChange={this.props.changeHandler} value={this.props.searchInput}/>
    )
  }

  render() {
    return (
      <div>{this.createSearchBar()}</div>
    )
  }
}

export default SearchBar;
