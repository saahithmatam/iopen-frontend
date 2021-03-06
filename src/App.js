// import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import {useEffect,useState} from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";




// import Home component
import createportal from "./views/createportal/createportal";

import activerooms from "./views/activerooms/activerooms"
// import About component
import hotelportal from "./views/hotelportal/hotelportal";

import Home from "./views/home/home";

import userportal from "./views/userportal/userportal";

import usersignin from "./views/usersignin/usersignin";

import customerportal from "./views/customerportal/customerportal";

import users from "./views/users/users";

import error from "./util/error";

import hotelportalrooms from './views/hotelportalrooms/hotelportalrooms';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 170px;
  border-color: red;
`;



// import ContactUs component
function App() {

  // const [loading, setLoading] = useState(true);
      
  //   useEffect(() => {
  //     // Loading function to load data or 
  //     // fake it using setTimeout;
  //     const loadData = async () => {
  
  //       // Wait for two second
  //       await new Promise((r) => setTimeout(r, 2000));
  
  //       // Toggle loading state
  //       setLoading((loading) => !loading);
  //     };
        
  //     loadData();
  //   }, [])
  //   if (loading) {
  //     return (
  //       <div>
  //       <RingLoader css={override} size={400} />
  //       <br />
  //       <h5>  <MDBIcon icon="dice-d20" size="2x"/> Powered by <b>IOpen Innovations</b></h5>
  //       </div>
  //     );  
  // }
  // else{
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/createportal" component={createportal} />
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/users" component={users} />
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/activerooms" component={activerooms} />
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/error" component={error} />
        {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/customerportal/:password/:room" component={customerportal} />
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/usersignin" component={usersignin} />

      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/userportal" component={userportal} />
        
      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/hotelportal" component={hotelportal} />
      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/hotelportalrooms" component={hotelportalrooms} />
        
      {/* This route is for contactus component
      with exact path "/contactus", in
      component props we passes the imported component*/}
      <Route path="/" component={Home} />
        
      {/* If any route mismatches the upper
      route endpoints then, redirect triggers
      and redirects app to home component with to="/" */}
      </Switch>
    </Router>
    </>
  );
  }



export default App;
