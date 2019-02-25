import React, { Component } from "react";
import Card from "./Card";

class Sort extends Component {

  sortForm = () => {
    return (
      <form>
        <h2> Sort By </h2>
        <label>
          Name:
          <input type="checkbox" name="name" value="name" onChange={this.props.checkHandler} />
        </label>
        <br />
        <label>
          Weight:
          <input type="checkbox" name="weight" value="weight" onChange={this.props.checkHandler} />
        </label>
        <br />
        <label>
          Greased:
          <input type="checkbox" name="greased" value="greased" onChange={this.props.checkHandler} />
        </label>
      </form>
    )
  }

  // radioForm = () => {
  //   return (
  //     <form>
  //       <input type="radio" name="name" value="name" checked={this.props.name === true} onChange={this.props.checkHandler} /> Name:<br />
  //       <input type="radio" name="weight" value="weight" checked={this.props.weight === true} onChange={this.props.checkHandler} /> Weight:<br />
  //       <input type="radio" name="greased" value="greased" checked={this.props.greased === true} onChange={this.props.checkHandler} /> Greasy:<br />
  //     </form>
  //   )
  // }

  render() {
    return (
      <div>
        {this.sortForm()}
      </div>
    )
  }
}

export default Sort;
