import React, { Component } from 'react';
import Card from './Card';
import Sort from "./Sort"
import GreasyPig from "./GreasyPig"
import FattyPig from "./FattyPig"
import PiggyName from "./PiggyName"
import SearchBar from "./SearchBar"
import FilterByName from "./FilterByName"
import piggiesData from "../porkers_data"

class PiggyContainer extends Component {
  state = {
    piggiesData: piggiesData,
    filteredPigs: piggiesData,
    name: false,
    weight: false,
    greased: false,
    searchInput: ""
  }

  piggies = () => {
    const {piggiesData, name, weight, greased} = this.state
    let pigCards = piggiesData.map((piggy, index) => {
      return <Card piggy={piggy} key={index} />
    })

    if (this.state.searchInput) {
      return <FilterByName piggiesData={this.state.piggiesData} searchInput={this.state.searchInput} />
    } else if (name) {
      return <PiggyName piggiesData={this.state.piggiesData}/>
    } else if (weight) {
      return <FattyPig piggiesData={this.state.piggiesData}/>
    } else if (greased) {
      return <GreasyPig piggiesData={this.state.piggiesData}/>
    } else {
      return pigCards
    }
  }

  checkHandler = event => { // swap true or false
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    })
    console.log(this.state[event.target.name])
  }

  changeHandler = event => { // something about this isnt right
    // console.log(event.target.value)
    this.setState({
      searchInput: event.target.value
    }, () => console.log("this is from searching:", this.state.searchInput) )
  }

  render() {
    return (
      <div>
        <SearchBar changeHandler={this.changeHandler} searchInput={this.state.searchInput} />
        <Sort checkHandler={this.checkHandler} />
        {this.piggies()}
      </div>
    )
  }
}

export default PiggyContainer;
