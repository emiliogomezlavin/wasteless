
import axios from 'axios'
import React from 'react'
import DonationCard from './partials/donation_card.js'
import DonationMap from './partials/donation_map.js'
import NewDonation from './partials/new_donation_form.js'


const DonationList = ({donations}) => {
  // Map through the todos
  const donationNode = donations.map((donation, index) => {
    return (
    	<div key={index}>
    		<DonationCard description={donation.description} contents={donation.contents} donator={donation.donator_id} />
    	</div>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{donationNode}</div>);
}


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
			  				donations: res.data.data
			  		})
			  	}.bind(this))
        // })

  }

  handleDonationSubmit(donation){
  	console.log("Donation:" , donation)
  	console.log(this.state);

  	let newDonation;

		axios.post('/api/donations/new', {
		    description: donation.description,
		    contents: donation.contents
		  })
      .then(function(res){
      		newDonation = res.data;
        	// this.state.donations.push(res.data)
        	// this.setState({donations: this.state.donations})
        	// this.forceUpdate()
        }.bind(this))
      .catch(function(err){
      	console.log(err);
      	}.bind(this))
		
		console.log("after it's saved in the backend", newDonation)
	}

  render() {
  
    if (this.state.donations) {
    	return (
	      	<div id="donations">
	      		<DonationMap />
		      	<DonationList donations={this.state.donations} />
						<NewDonation onDonationSubmit={this.handleDonationSubmit} />	      	
	      	</div>
    	)
	}
	

	return (<div>Loading... </div>)
  }
}

export default Donations
