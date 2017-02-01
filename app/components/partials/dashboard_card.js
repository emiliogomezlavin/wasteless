import axios from 'axios'
import React from 'react'

class DashboardCard extends React.Component {
  render () {
    return (
      <div className="col-sm-3">
        <div className="bg-primary card-description">
          <h1>{this.props.header}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default DashboardCard
