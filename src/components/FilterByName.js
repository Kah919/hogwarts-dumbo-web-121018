import React, { Component } from "react";
import Card from "./Card"

class FilterByName extends Component {
  filteredCards = () => { // why isnt this method working?
    // console.log("this is from filter:", this.props.piggiesData)
    // console.log("this is from filter:",this.props.searchInput)
    let filteredPigs = this.props.piggiesData.filter(piggy => {
      return piggy.name.toLowerCase().includes(this.props.searchInput.toLowerCase())
    })
    return filteredPigs.map((piggy, index) => {
      return <Card piggy={piggy} key={index} />
    })
  }

  render() {
    return (
      <div>
        {this.filteredCards()}
      </div>
    )
  }
}

export default FilterByName;
