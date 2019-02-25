import React, { Component } from "react"
import Card from "./Card"

class FattyPig extends Component {
  sortPigByWeight = () => {
    let sortWeight = [...this.props.piggiesData]
    sortWeight.sort((a, b) => {
      return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"];
    })
    // console.log("sorted name:", sortName)
    return sortWeight.map((piggy, index) => {
      console.log(piggy["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
      return <Card piggy={piggy} key={index} />
    })
  }

  render() {
    return (
      <div>{this.sortPigByWeight()}</div>
    )
  }
}

export default FattyPig;
