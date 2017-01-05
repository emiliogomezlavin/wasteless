
import axios from 'axios'
import React from 'react'
import DonationCard from './partials/donation_card.js'
import DonationMap from './partials/donation_map.js'
import NewDonation from './partials/new_donation_form.js'


class Donations extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {donations: null};
  }

  componentDidMount(){
  	let _this = this;
  	let currentSession;
  	this.serverRequest = 
  		// axios.get('/sign_in')
    //       .then(function(res){
    //         currentSession = res.data.passport.user;
    //       }.bind(this))
    //     .then(function(){
          axios.get('/api/donations')
			  		.then(function(res){
			  			_this.setState({
			  				donations: res.data
			  		})
			  	}.bind(this))
        // })

  }

  onDonationSubmit(donation){
  	console.log(donation)

		axios.post('/api/donations/new', {
		    data: donation
		  })
      .then(function(res){
        console.log(res);
        }.bind(this))
		
		// this.setState (donation);
	}

  render() {
  
    if (this.state.donations) {
    	return (
	      	<div id="donations">
	      		<DonationMap />
		      	{this.state.donations.data.map(function(donation, index){
			
		      		return (
		      			<div key={index}>
		      				<DonationCard description={donation.description} contents={donation.contents} donator={donation.donator_id} />
		      			</div>
		      		)
		      	})}
		      	<NewDonation onDonationSubmit={this.handleSubmit} />
	      	</div>
    	)
	}
	

	return (<div>Loading... </div>)
  }
}

export default Donations
