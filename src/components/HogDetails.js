import React from 'react'

const HogDetails = () => {
  return(
    <div>
      <h3>{this.props.piggy.specialty}</h3>
      {this.props.piggy.greased ? <h4>Greasy</h4> : <h4>Clean</h4>}
      <h4>{this.props.piggy['highest medal achieved']}</h4>
      <h4 className="subtleText">{this.props.piggy['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
    </div>
  )
}

export default HogDetails
