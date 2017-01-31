import React from 'react';
import cookie from 'react-cookie'
import axios from 'axios'
import { Link } from 'react-router';


export default class Main extends React.Component {

  onLogin() {
    axios.get('/sign_in')
      .then(function(res){
        cookie.save("userId", res.data.passport.user)
        return true;
      }.bind(this))
      .catch(function(err) {
        console.log(err)
      })
  }

  onLogout() {
    cookie.remove('userId');
  }

  // const loginCheck = () => {
  //   console.log("hey hey hey")
  //   axios.get('/sign_in')
  //     .then(function(res){
  //       console.log(res)
  //       Cookie.save("userId", res.id)
  //       return true;
  //     }.bind(this))
  //     .catch(function(err) {
  //       console.log(err)
  //     })
  //     return false
  // }
  //
  // const requireAuth = (nextState, replace) => {
  //   if (!loginCheck()) {
  //     console.log("FUCK YOU")
  //     replace({
  //       pathname: '/donations'
  //     })
  //   }
  // }


  render() {
    this.onLogin()
      return (
        <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">Wasteless</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li><Link to="/donations" activeClassName="active">Donations</Link></li>
                          <li><Link to="/profile" activeClassName="active">Profile</Link></li>
                          <li><Link to="/past_donations" activeClassName="active">Past Donations</Link></li>
                          <li><form action="/sign_out" method="post" onSubmit={this.onLogout}><button className="btn sign-out" value="Sign Out" >Sign Out</button></form></li>
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
