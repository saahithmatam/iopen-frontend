

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



class users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }
  render() {
    const { hits } = this.state;
    console.log(hits);
    
    if(hits.length>=1){
      return (
        <body>
          <div>
          <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
          <br/>
          <br/>
          <a text-align="left" href = "/hotelportal"><button><MDBIcon icon="stream" size="2x"/></button></a>
          <br />
          <br />
          <h1>Active Users</h1>
          <br />
          <ul>
              {hits.map(hit =>
              <li key={hit.room}>
                  
                  <h3 > 
                      <form action="/roominfo" id={hit.room} method="POST">
                          <input type="hidden" value={hit.room} name="roominfo" />
                          <Link type = "submit" form={hit.room} to={{
                                  pathname: "/userportal/"+hit.room,
                                  state: { room: hit.room }
                              }}><h1>{hit.firstname} {hit.lastname}  <h6>Created On: {hit.date}<br/> At: {hit.time}</h6>   <button><MDBIcon icon="home" size="2x"/>{hit.room}</button></h1></Link>
                          </form>
                          </h3>
                          <br />
              </li>
              )}
          </ul>
          </div>
        </body>
      );
    }
    else if(hits.length === 0){
      return(
        <body>
          <div>
          <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
          <br/>
          <br/>
          <a text-align="left" href = "/hotelportal"><button><MDBIcon icon="stream" size="2x"/></button></a>
          <br />
          <br />
          <h1>Active Users</h1>
          <br />
          <h1>-No Active Users-</h1>
          </div>
        </body>
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
  
export default users;