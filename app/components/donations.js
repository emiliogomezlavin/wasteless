
import axios from 'axios'
import React from 'react'
import DonationCard from './partials/donation_card.js'
import DonationMap from './partials/donation_map.js'


class Donations extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {donations: null};
  }

  componentDidMount(){
  	let _this = this;
  	this.serverRequest = 
	  	axios.get('/api/donations')
	  		.then(function(res){
	  			_this.setState({
	  				donations: res.data
	  		})
	  	}.bind(this));
  }

  // componentWillUnmount(){
  // 	this.serverRequest.abort()
  // }

  render() {
  	console.log(this.state)
    if (this.state.donations) {
    	if(!this.props.loaded){
			return <div> Loading... </div>	
    	}
    	return (
	      	<div id="donations">
		      	<Map google={this.props.google} id="map"/>
		      	{this.state.donations.data.map(function(donation, index){
		      		return (
		      			<div key={index}>
		      				<li><h1> {donation.description}</h1></li>
		      				<li><h1> {donation.contents}</h1></li>
		      				<li><h1> {donation.donator_id}</h1></li>
		      			</div>
		      		)
		      	})}
	      	</div>
    	)
	}

	return (<div>Loading... </div>)
  }
}

export default Donations
