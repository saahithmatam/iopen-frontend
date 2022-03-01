
import React from "react";
import './buttonstyle.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';


  
const createportal = () => {
  return (
    <div>
      <Link to="/"><button type="button" >Dashboard</button></Link>
      <br/>
      <br/>
      <h1>Create Portal</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Please Input a CSV file containing your hotels information</h2>
      <br/>
      <form action="/createhotelportal" method="POST" id="hotelform">
      <button><input type="file" id="myfile" name="myfile" /></button>
      <br/>
      <br/>
      <button class="button-primary" type="submit" value="Submit" form="hotelform"><MDBIcon icon="upload" size="3x"/></button>
      </form>
    </div>
  );
};
  
export default createportal;