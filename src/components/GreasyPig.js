import React, { Component } from "react"
import Card from "./Card"

class GreasyPig extends Component {
  sortPigByGrease = () => {
    let sortGrease = [...this.props.piggiesData]
    sortGrease.sort((a, b) => {
      return (a.greased === b.greased)? 0 : (a.greased ? -1 : 1)
    })

    return sortGrease.map((piggy, index) => {
      return <Card piggy={piggy} key={index} />
    })
  }

  render() {
    return (<div>{this.sortPigByGrease()}</div>)
  }
}

export default GreasyPig;
