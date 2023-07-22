import React from 'react';
import '../Styles/outdoor.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

const Outdoors = (props) => {
            const mapOptions = {
              center: { lat: 51.5074, lng: -0.1278 },
              zoom: 10
            };
        return(
            <div>                   
  <Header newGroup={false} user={props.user}/>
  <hr class="box-line"/>
  <div class="tops">
 <h1 style={{marginLeft:" 20px"}}> Outdoor events near Verizon, NY</h1>
 <div class="menu">
    <div class="menu-item active">Events</div>
    <div class="menu-item">Groups</div>
</div>
<div class="button-rows">
    <div class="dropdown">
      <button class="dropdown-button">Any day<i class="fas fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">Any day</a>
        <a href="#"> Starting soon</a>
        <a href="#">Today</a>
        <a href="#">Tomorrow</a>
        <a href="#">This week</a>
        <a href="#">This weekend</a>
        <a href="#">Next week</a>
        <a href="#">Custom</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-button"> Any type<i class="fas fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">Any type</a>
        <a href="#">Online</a>
        <a href="#">In person</a>
        <a href="#">Indoor only</a>
        <a href="#">Outdoor only</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-button">Any distance<i class="fas fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">Any distance</a>
        <a href="#">2 miles</a>
        <a href="#">5 miles</a>
        <a href="#">10 miles</a>
        <a href="#">25 miles</a>
        <a href="#">50 miles</a>
        <a href="#">100 miles</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-button">any category<i class="fas fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">Any category</a>
        <a href="#">New groups</a>
        <a href="#">Art and culture</a>
        <a href="#">dancing</a>
        <a href="#">games</a>
        <a href="#">music</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-button1">sort by:Relevance <i class="fas fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">date</a>
        <a href="#">Relevance</a>
      </div>
    </div>
</div>
<hr class="box-lines"/>
<div class="container1">

  <div class="box">
   
  <div class="scrolling-boxes">
    <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi1.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bi2.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
      <hr class="box-line"/>
      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="scrolling-box">
        <div class="box-part">
          <img src="./Assets/bg10.jpg" alt="Image 3" height="150px" width="300px"/>
        </div>
        <div class="box-part">
          <div class="date"> WED,MAY 24 . 12:30 AM IST </div>
          <div class="content"> DevOps On Snowflake using Flyway</div>
          <div class="sub"> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
     </div>
     </div> 
     <div class="box">
        <h2>Map</h2>
        <p>Find Events Near U</p>
        <div id="map" class="map"><LoadScript googleMapsApiKey="AIzaSyCN1Q5-C1xWrI96N3qDC-EmPKxIENk2NUQ">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={mapOptions.center}
          zoom={mapOptions.zoom}
        />
      </LoadScript></div>
      </div>
  </div>
 </div>
{/* footer */}
<Footer newGroup={false} user={props.user}/>
{/* footer */}

</div>

);
}




export default Outdoors;