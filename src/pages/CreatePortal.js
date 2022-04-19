import React from "react";
import { Link } from "react-router-dom";


const CreatePortal = () => {
    return (
      <div>

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
        <a href='http://localhost:3000/hotelportal#/hotelportal%27%3E'>
        <button class="button-primary" type="submit" value="Submit" form="hotelform"><h4>Upload</h4></button>
        </a>
        </form>
      </div>
    );
  };

  export default CreatePortal;
