import React from 'react'
import axios from 'axios'

class DonationCard extends React.Component {
  
  assignDonation (donationId, e){
    e.preventDefault();

    let currentSession;
    console.log(donationId);

    axios.get('/sign_in')
      .then(function(res){
        currentSession = res.data.passport.user;
        console.log(currentSession);
      }.bind(this))
      .then(function(){
        axios.post('/api/donations/assign_donation', {
          donator_id: currentSession,
          donation_id: donationId
        })
          .then(function(res){
              console.log(res);
            }.bind(this))
          .catch(function(err){
            console.log(err);
            }.bind(this))
      })    

  }

  render() {
    let description = this.props.description;
    let contents = this.props.contents;
    let donator = this.props.donator;
    let donationId = this.props.id;

    // console.log(currentUser);

    return (
      <div id="donation_card">
        <h1>Donation from {donator}</h1>
        <ul id="donation-card-contents">
          <li>Description: {description}</li>
          <li>Contents: {contents}</li>
        </ul>
        <button id={donationId} onClick={this.assignDonation.bind(this, donationId)}>Request Donation</button>
      </div>
    )
  }
}

export default DonationCard