
import React, { Component } from 'react';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../../styles/buttonstyle.css';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";




const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 170px;
  border-color: red;
`;


class userportal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  
  
  
  componentDidMount() {
    const room = this.props.location.state.room;
    console.log(room)
    fetch('/roominfo/'+room)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }
  render() {
    const { hits } = this.state;
    console.log(hits)
    let door_real;
    let temperature;
    let motion;
    let detect;
    let go;

    if(hits.door === "CLOSED"){
        go = 1
        door_real = <MDBIcon icon="door-closed" size="3x" />;
       }
    else if(hits.door === "OPEN"){ 
        go = 1
        door_real = <MDBIcon icon="door-open" size="3x" />;
       }
    else if(hits.door === "Not Active"){
        go = 1
        door_real = <MDBIcon icon="door-closed" size="3x" />;
    }
    else{
        door_real = <MDBIcon icon="door-closed" size="3x" />;
    }
    
    if(hits.temperature <= 70){
        temperature = <h2><MDBIcon icon="thermometer-quarter" class="translate" size="3x"/> <br/> {hits.temperature} C </h2>;
        }
    else{ 
        temperature = <h2><MDBIcon icon="thermometer-three-quarters" class="translate"size="3x"/> <br/> {hits.temperature} C</h2>;
    }
        
    if(hits.motion ===  "True"){
            go = 1
            motion = <MDBIcon icon="user-alt" size="3x"/>;
            detect = "Occupied";
        }
    else if(hits.motion ===  "False"){ 
        go = 1
        motion = <MDBIcon icon="user-slash" size="3x"/>;
        detect = "Vacant";
    }
    else{
        motion = <MDBIcon icon="user-alt" size="3x"/>;
        detect = " ";
    }
    

    const refreshPage = ()=>{
        window.location.reload();
    }
    

    if(go>0){
        return (
            <div>
            <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
            <br/>
            <a text-align="left" href = "/hotelportal"><button><MDBIcon icon="stream" size="2x"/></button></a>
            <form action="/refreshuser" method="POST" id="refreshuser">
                <input type="hidden" value={hits.room} name="roominfo" id="roominfo"/>
                <button type="submit" form="refreshuser">RESET USER</button>
            </form>
            <br/>
            <h1 class="roomno-display">Room: {hits.room}</h1>
            <h1>Key: {hits.key}</h1>
            <h1>User: {hits.user}</h1>
            <a><button onClick={refreshPage}><MDBIcon icon="sync" size="1x"/></button></a>
            <br/>
            <br/>
            <br/>
            <div>
            <h2>{motion}<br/><h5>{detect}</h5></h2>
            <br />
            <br />
            <h2>{temperature}</h2>
            <br />
            <br />
            <h2>{door_real}<br/><h5>{hits.door}</h5></h2>
            <br />
            <br />
            <h2><MDBIcon icon="clock" size="3x" /> <br/>{hits.time}<br/><h5>(last updated door)</h5></h2>
            <br />
            </div>
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
  
export default userportal;


