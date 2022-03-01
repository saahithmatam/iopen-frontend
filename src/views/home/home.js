import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import './styles/buttonstyle.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';





const Home = () => {

	return (
			<div>
			<h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
			<br/>
			<br/>
			<h1><b>Dashboard</b></h1>
			<br />
			<ul>
				<li>
				{/* Endpoint to route to About component */}
				<MDBIcon icon="concierge-bell" size="7x"/>
				<br/>
				<Link to="/createportal"><button type="button" class="btn1">Create Portal</button></Link>
				</li>
				<br/>
				<br/>
				<li>
				{/* Endpoint to route to Contact Us component */}
				<MDBIcon icon="hotel" size = "7x"/>
				<br/>
				<Link to="/hotelportal"><button>Hotel Portal</button></Link>
				
				</li>
			</ul>
			</div>
			
		
	);
    

};

export default Home;
