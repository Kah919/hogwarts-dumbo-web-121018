import React, { Component } from "react"
import Card from "./Card"

class PiggyName extends Component {
  sortPigByName = () => {
    let sortName = [...this.props.piggiesData]
    // console.log("sortName:", sortName)
    sortName.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    // console.log("sorted name:", sortName)
    return sortName.map((piggy, index) => {
      return <Card piggy={piggy} key={index} />
    })
  }

  render() {
    return <div>{this.sortPigByName()}</div>
  }
}

export default PiggyName;
