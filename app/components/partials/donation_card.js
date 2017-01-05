import React from 'react'

class DonationCard extends React.Component {
  render() {
    let description = this.props.description;
    let contents = this.props.contents;
    let donator = this.props.donator;

    return (
      <div id="donation_card">
        <h1>Donation from {donator}</h1>
        <ul id="donation-card-contents">
          <li>Description: {description}</li>
          <li>Contents: {contents}</li>
        </ul>
      </div>
    )
  }
}

export default DonationCard