import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import JoinGroup from "./Components/JoinGroup";
import Outdoors from './Components/Outdoors';
import Connect from './Components/Connect'
import { useState , useEffect } from "react";
import jwt_decode from "jwt-decode";
import Third from "./Components/Third";
import After from "./Components/After";
import Tips from "./Components/Tips";

function App() {
  let getUserDetails = () => {
    let token = localStorage.getItem('meetup_auth_token')
    if(token === null){
      return null
    }
    else{
      try{
        let data =jwt_decode(token);
        return data
      } catch (error) {
        return null;
      }

    }
  }
  let [user,setUser] = useState(getUserDetails());

  useEffect(() =>{
    console.log(user);
  },[]);
  return (
    <>
<Routes>
  <Route path="/" element = {<Home user={user}/>} />
  <Route path="/JoinGroup" element = {< JoinGroup user={user}/>} />
  <Route  path="/Outdoors" element={<Outdoors user={user}/>} />
  <Route  path="/Connect" element={<Connect user={user}/>} />
  <Route  path="/Third" element={<Third user={user}/>} />
  <Route  path="/After" element={<After user={user}/>} />
  <Route  path="/Tips" element={<Tips user={user}/>} />
</Routes>
    
    </>
  );
}

export default App;
