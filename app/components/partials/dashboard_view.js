import axios from 'axios'
import React from 'react'
import LineGraph from './dashboard_line_graph.js'
import BarGraph from './dashboard_bar_graph.js'
import DashboardCard from './dashboard_card.js'
import DashboardFeed from './dashboard_feed.js'

class DashboardView extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <LineGraph />
          <BarGraph />
        </div>
        <div className="row cards">
        <DashboardCard header="Card 1" description="Card 1 description" />
        <DashboardCard header="Card 2" description="Card 2 description" />
        <DashboardCard header="Card 3" description="Card 3 description" />
      </div>
      <div className="row">
        <DashboardFeed />
      </div>
    </div>
    )
  }
}

export default DashboardView
