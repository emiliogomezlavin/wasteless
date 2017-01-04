import axios from 'axios'
import React from 'react'
import { Link } from 'react-router';
import Profile from './profile.js'

class Dashboard extends React.Component {

    render() {
      return (
        <div>
          <div id="dashboard">
            <h2>Welcome to the WasteLess dashboard</h2>
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
            <div className="dashboard-view">
              {this.props.children}
            </div>
          </div>
      </div>
      )
    }
}

export default Dashboard
