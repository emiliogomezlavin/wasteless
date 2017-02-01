import axios from 'axios'
import React from 'react'

class DashboardFeed extends React.Component {
  render () {
    return (
      <div className="col-sm-8">
        <h3>Feeds</h3>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
        </ul>
      </div>
    )
  }
}

export default DashboardFeed
