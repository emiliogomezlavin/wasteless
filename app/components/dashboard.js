import axios from 'axios'
import React from 'react'
import { Link } from 'react-router';
import Profile from './profile.js'

class Dashboard extends React.Component {

    render() {
      return (
        <div>
          <div id="sidebar-wrapper">
            <nav id="spy">
              <ul className="sidebar-nav nav">
                <li><Link to="/" activeClassName="active">Dashboard</Link></li>
                <li><Link to="/" activeClassName="active">Link 1</Link></li>
                <li><Link to="/" activeClassName="active">Link 2</Link></li>
                <li><Link to="/" activeClassName="active">Link 3</Link></li>
                <li><Link to="/" activeClassName="active">Link 4</Link></li>
              </ul>
            </nav>
          </div>
        <Profile />
      </div>
      )
    }
}

export default Dashboard
