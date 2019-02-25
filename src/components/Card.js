import React, { Component } from 'react'
import HogDetails from './HogDetails'
// import augustus_gloop from "../hog-imgs/augustus_gloop.jpg"
// import bay_of_pigs from "../hog-imgs/bay_of_pigs.jpg"
// import cherub from "../hog-imgs/cherub.jpg"
// import galaxy_note from "../hog-imgs/galaxy_note.jpg"
// import leggo_my_eggo from "../hog-imgs/leggo_my_eggo.jpg"
// import mudblood from "../hog-imgs/mudblood.jpg"
// import piggy_smalls from "../hog-imgs/piggy_smalls.jpg"
// import porkchop from "../hog-imgs/porkchop.jpg"
// import rainbowdash from "../hog-imgs/rainbowdash.jpg"
// import sobriety from "../hog-imgs/sobriety.jpg"
// import the_prosciutto_concern from "../hog-imgs/the_prosciutto_concern.jpg"
// import trouble from "../hog-imgs/trouble.jpg"
// import truffleshuffle from "../hog-imgs/truffleshuffle.jpg"


class Card extends Component {
  state = {
    hideInfo: true
  }

  clickEvent = event => {
    this.setState({hideInfo: !this.state.hideInfo})
  }

  // showInfo = () => {
  //   if(this.state.hideInfo === false) {
  //     console.log("hi")
  //     return (
  //       <div>
  //         <h3>{this.props.piggy.specialty}</h3>
  //         {this.props.piggy.greased ? <h4>Greasy</h4> : <h4>Clean</h4>}
  //         <h4>{this.props.piggy['highest medal achieved']}</h4>
  //         <h4 className="subtleText">{this.props.piggy['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
  //       </div>
  //     )
  //   }
  // }

  normalize = () => {
    let formattedName = this.props.piggy.name.toLowerCase().split(" ").join("_")
    let pigImg = require(`../hog-imgs/${formattedName}.jpg`)
    return pigImg
  }

  render() {
    const {name} = this.props.piggy

    return (
        <div className="pigTile" onClick={this.clickEvent}>
          <img src={this.normalize()} alt={this.normalize()}/>
          <h1>{name}</h1>
          {/*this.showInfo()*/}
          {/*this.state.hideInfo ? null:<HogDetails/>*/}
          {this.state.hideInfo ? null:<HogDetails/>}
        </div>
    )
  }
}

export default Card;
