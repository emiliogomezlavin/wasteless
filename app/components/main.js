import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Wasteless</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active">Dashboard</Link></li>
                        <li><Link to="/profile" activeClassName="active">Profile</Link></li>
                        <li><Link to="/past_donations" activeClassName="active">Past Donations</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    )
  }
}
