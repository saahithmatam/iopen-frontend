

import React from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';


class usersignin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: {
        password: props.password,
      }
    }
  }

  handlePasswordChanged(event) {
    var password        = this.state.password;
    password.password  = event.target.value;

    this.setState({ password: password });
  }


  render() {
    console.log(this.state.password.password)
    return (
        <div>
        <h5 class="home-text">  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen</b></h5>

        <br/>
        <br/>
        <h1>Sign In</h1>
        <h6>*We will send you your customized user portal shortly after clicking submit*</h6>
        <form action="/usersignin" method="POST" id="pass">
            <br/>
            <br/>
             <br/>
        <pre>
            </pre>
          <input placeholder="firstname" type="text" id="firstname" name="firstname" />
          <br/>
          <br />
          <input placeholder="lastname" type="text" id="lastname" name="lastname" />
          <br/>
         123 <br/>
          <input placeholder="phonenumber" type="text" id="phonenumber" name="phonenumber" />
          <br/>
          <br/>
          <input placeholder="room key" value = {this.state.password.password} onChange={this.handlePasswordChanged.bind(this)} type="text" id="pass" name="pass"/>
          <br />
          <br />
          <button type = "submit" form="pass">Submit</button>
          {/* <Link type = "submit" form="pass" to={{
                                pathname: "/customerportal/"+this.state.password.password,
                                state: { room: this.state.password.password} 
                              }}><br/><button ><MDBIcon icon="sign-in-alt" /></button></Link> */}
          </form>
        </div>
    );
  }
}

export default usersignin;
//value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}