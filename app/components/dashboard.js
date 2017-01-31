import axios from 'axios'
import React from 'react'
import { Link } from 'react-router'
import Cookie from 'react-cookie'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

const data = [
      {name: '1', uv: 4000, pv: 2400, amt: 2400},
      {name: '2', uv: 3000, pv: 1398, amt: 2210},
      {name: '3', uv: 2000, pv: 9800, amt: 2290},
      {name: '4', uv: 2780, pv: 3908, amt: 2000},
      {name: '5', uv: 1890, pv: 4800, amt: 2181},
      {name: '6', uv: 2390, pv: 3800, amt: 2500},
      {name: '7', uv: 3490, pv: 4300, amt: 2100},
];

class Dashboard extends React.Component {

    render() {
      return (
        <div>
          <div id="dashboard">
            <h2>Welcome to the WasteLess dashboard</h2>
            <div className="row">
              <div className="col-sm-3">
                <div className="bg-primary">
                  <h1>Something 1235</h1>
                  <p>New Something Orders</p>
                </div>
              </div>
            <div className="col-sm-3">
              <div className="bg-primary">
                <h1>Card 2 1235</h1>
                <p>New Something Orders</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="bg-primary">
                <h1>Card 2 1235</h1>
                <p>New Something Orders</p>
              </div>
            </div>
          </div>
          <h3>Sample Line Graph</h3>
          <LineChart width={300} height={200} data={data}>
            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey='name' />
            <YAxis />
          </LineChart>
        </div>
          <div id="sidebar-wrapper">
            <nav id="spy">
              <ul className="sidebar-nav nav">
                <li><Link to="/profile" activeClassName="active">Profile</Link></li>
                <li><Link to="/upcoming_pickups" activeClassName="active">Pick Ups</Link></li>
                <li><Link to="/past_donations" activeClassName="active">Past Donations</Link></li>
                <li><Link to="/following" activeClassName="active">Following</Link></li>
              </ul>
            </nav>
          </div>
          <div className="dashboard-view">
            {this.props.children}
          </div>
      </div>
      )
    }
}

export default Dashboard
