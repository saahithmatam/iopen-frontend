

import React, { Component } from 'react';

import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";




const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 170px;
  border-color: red;
`;



class hotelportal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.


  componentDidMount() {
    fetch('/createdhotelportal')
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }
  render() {
    const { hits } = this.state;
    console.log(hits.length)
    if(hits.length>0){
      return (
        <div>
          <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
          <br/>
          <br/>
          <a text-align="left" href = "/"><button>Dashboard</button></a>
          <a text-align="left" href = "/activerooms"><button>Active Rooms</button></a>
          <br />
          <br />
          <h1>Floor Selection</h1>
          <br />
          <ul>
          {hits.map(hit =>
            <li key={hit}>
              
              <h3 > 
                  <form action="/floorinfo" id={hit} method="POST">
                      <input type="hidden" value={hit} name="floorinfo" />
                      <Link type = "submit" form={hit} to={{
                              pathname: "/hotelportalrooms/"+hit,
                              state: { room: hit }
                            }}><button><MDBIcon icon="stream" size="2x"/> {hit}</button></Link>
                      </form>
                      </h3>
                      <br />
            </li>
            
          )}
        </ul>
      </div>
    );
    }
    else{
      return(
        <div>
        <RingLoader css={override} size={400} />
        <br />
        <h5>  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
        </div>
    );
    }
    
    
  }
}
  
export default hotelportal;