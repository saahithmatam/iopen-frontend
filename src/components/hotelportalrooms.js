

import React, { Component } from 'react';

import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';



class hotelportalrooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  

  componentDidMount() {
    const floor = this.props.location.state.room;
    console.log(floor)
    fetch('/floorinfo/'+floor)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }
  render() {
    const { hits } = this.state;
    

    return (
      <body>
        <div>
        <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
        <br/>
        <br/>
        <a text-align="left" href = "/hotelportal"><button><MDBIcon icon="stream" size="2x"/></button></a>
        <br />
        <br />
        <h1>Room Selection</h1>
        <br />
        <ul>
            {hits.map(hit =>
            <li key={hit}>
                
                <h3 > 
                    <form action="/roominfo" id={hit} method="POST">
                        <input type="hidden" value={hit} name="roominfo" />
                        <Link type = "submit" form={hit} to={{
                                pathname: "/userportal/"+hit,
                                state: { room: hit }
                            }}><button><MDBIcon icon="home" size="2x"/> {hit}</button></Link>
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
}
  
export default hotelportalrooms;