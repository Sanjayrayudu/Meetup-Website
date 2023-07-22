import '../Styles/home.css';
import { Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import { BASE_URL } from './ApiUrl';
import axios from 'axios';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { GoogleOAuthProvider ,GoogleLogin } from '@react-oauth/google'; 
import jwt_decode from "jwt-decode";
import Footer from './Footer';


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

const Home = (props) => {

  
  let onSuccess = (credentialResponse) => {
    let token = credentialResponse.credential;
    try{
    let data =jwt_decode(token);
    localStorage.setItem("meetup_auth_token",token);
    alert("Login Successfully");
    window.location.assign("/After");
    }catch(error){
     console.log(error);
    }
  };
  let onError = () => {
    console.log('Login Failed');
    localStorage.removeItem("meetup_auth_token");
  };
  

  let [locationList , setLocationList] = useState([]);

  let getLocationList = async () =>{
    try{
    let url = "http://localhost:8989/api/get-location-list";
    let {data} = await axios.get(url);
    setLocationList(data.locationList)
  }catch(error){
    alert("server error");
  }
  };
  useEffect(() => {
    getLocationList();
   //console.log("mounting");
},[]);

      
        return(
          
            <div>
              <GoogleOAuthProvider clientId="614438783556-vh61iouagb29dfvi6elbsphp3n9je252.apps.googleusercontent.com">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Join Meetup</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
    <GoogleLogin
  onSuccess={onSuccess}
  onError={onError}
/>
;
    </div>
      </div>
    </div>
  </div>
</div>
              <Header newGroup={false} user={props.user}/>
    
{/* header */}
{/* first half */}
<div className="whole" style={{marginTop: "-100px"}}>
      
        <div className="content-box">

            <div className="content-head">
              <h1>The people platform- where interests become friendships</h1>
              </div>

              <div className="content-text">
              <p>Whatever your interest, from hiking and reading to networking and skill sharing,there are thousands of people who share it on Meetup.<br></br>Events are happening everyday- signup to join the fun </p>
              {
    props.user ? null:<button type="button" className="content-button" 
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal" 
       >
        Join Meetup
        </button>
}
</div>

            <div className="content-image">
              <img src="./Assets/online_events.svg" alt=" charan4"/>
            </div>

          </div>
        
          <div className="box-row">

            <div className="boxes">
              <div className="box-image">
                <img src="./Assets/screen1.jpg" alt="sanjay"height="200px" width="350px"/>
              </div>
              <div className="box-content" style={{marginTop:"20px"}}>
                <p><br></br><Link to="/JoinGroup" style={{color: "#00798a"}} onClick={scrollToTop}>Make New Friends <span class="bi bi-arrow-right"></span> </Link></p>
              </div>
            </div>

            <div className="boxes">
              <div className="box-image">
                <img src="./Assets/image2.jpg" alt=" sathvika" height="200px" width="350px"/>
              </div>
              <div className="box-content" style={{marginTop:"20px"}}>
                <p><br></br> <Link to="/Outdoors" style={{color: "#00798a"}} onClick={scrollToTop}>Explore The Outdoors <span class="bi bi-arrow-right"></span> </Link></p>
              </div>
            </div>

            <div className="boxes">
              <div className="box-image">
                <img src="./Assets/image3.jpg" alt=" ashok " height="200px" width="350px"/>
              </div>
              <div className="box-content" style={{marginTop:"20px", textColor:"#00798a"}}>
                <p><br></br> <Link to="/Connect" style={{color: "#00798a"}} onClick={scrollToTop}>Connect Over Tech <span class="bi bi-arrow-right"></span></Link></p>
              </div>
            </div>

          </div>
           
          <div className="button-row">
          <Link to="/Outdoors" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><button className="button">Boost your career</button></Link>
           <Link to="/Outdoors" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}> <button className="button">find your zen</button></Link>
          <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}>  <button className="button">get moving</button></Link>
         <Link to="/Connect" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}>  <button className="button">share language+ culture</button></Link>
          <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}>  <button className="button">read with friends</button></Link>
          <Link to="/Connect" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}>  <button className="button">write together</button></Link>
          <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}>  <button className="button">hone your craft</button></Link>
          </div>
          {/* first half */}
          {/* search and location bar */}
          <div style={{marginTop: "10%",
    marginLeft: "210px"}}>
          <h2 style={{marginLeft: "48px"}}>what do you want to do?</h2>

          <div className="search-bar-location-box" style={{marginLeft: "39px"}}>

            <div className="search-bars">
              <input type="text" className="search-input" placeholder="Search..."></input>
              <i className="fas fa-search search-icons"></i>
            </div>

            <div className="location-box">
              <select type="text" className="location-input" placeholder="Enter Location...">
                <option value="">--- Select Location ---</option>
                {
                  locationList.map((locations,index)=>{
                    return (
                    <option key= {index} value = {locations.location_id}>
                      {locations.name},{locations.city}
                      </option>
                    );
                  }
                  )
                }
              </select>
              <i className="fas fa-map-marker-alt"></i>
            </div>
           
          </div>
          {/*search  and location bar ends */}
          {/*search button*/}
        <div className="button-row">
            <button className="button1" style={{width: '500px'}}>Search</button>
        </div>
</div>
        
        {/*wholeclassName ends*/}
          </div>
        {/* top className ends */}
        {/*mid className part2 of page starts*/}
        <div className="mid">
        {/*heading starts*/}
         <h2 style={{paddingLeft: '404px'}}>How Meetup works</h2>
         <div style={{paddingLeft: '330px'}}>Meet new people who share your interests through online and in-person</div>
         <div style={{paddingLeft: '436px'}}>events. Its free to create an account.</div>
         <br></br>
         <br></br>
          {/*heading ends*/}
          {/*3 boxes with some logos*/}
          <div className="box-row" style={{justifyContent: 'space-around'}}>
            
          <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}> <div className="boxes" style = {{
    border: '#ebdada',
    backgroundColor: '#ebdada',
    borderRadius: '5%',
    width: '300px',
  }}>
              <div className="box-image" style={{paddingLeft:"60px"}}>
                <img src="./Assets/handsUp.svg" alt="naveen 5"/>
              </div>
              <div className="box-content">
               <div className="head1" >Join a group</div>
               <div className="sub" style = {{
    alignItems: 'center',
    justifyContent: 'center',
  }}>Do what you love,meet<br></br> others who love it,find your community.The rest is history!</div>
              </div>
            </div>
</Link>
<Link to="/Outdoors" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}> <div className="boxes"style={{
        border: '#ebdada',
        backgroundColor: '#ebdada',
        borderRadius: '5%',
        width: '300px',
      }}>
              <div className="box-image"style={{paddingLeft:'60px'}}>
                <img src="./Assets/ticket.svg" alt="kaeem"/>
              </div>
              <div className="box-content">
                <div className="head1" >Find an event</div>
                <div className="sub" style={{ alignItems: 'center', justifyContent: 'center' }}>Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</div>
               </div>
              </div>
           </Link> 
           <Link to="/Connect" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div className="boxes"style={{ border: '#ebdada', backgroundColor: '#ebdada', borderRadius: '5%', width: '300px' }}>
              <div className="box-image"style={{paddingLeft:'60px'}}>
                <img src="./Assets/joinGroup.svg" alt="bhaskar"/>
              </div>
              <div className="box-content">
                <div className="head1" >Start a group</div>
               <div className="sub" style={{ alignItems: 'center', justifyContent: 'center' }}>You dont have to be an expert to gather people together and explore shared interests.</div>
              </div>
              </div></Link>

            </div>
            {/*3 boxes with logos ends*/}
            <br></br>
            <br></br>
            {
    props.user ? null:<button type="button" className="content-button" style={{marginLeft: '500px'}}
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal" 
       >
        Join Meetup
        </button>
}
            

          <div style={{marginTop: '6%'}}>
        <h2>Upcoming online events</h2>
        <span> Explore more events </span>
    </div>
     </div>   
     {/* scrolling boxes */}
  <div className="container" style={{marginTop: '-6%'}}>

    <div className="scroll-arrows">
        <button className="scroll-arrow scroll-arrow-left">&#8592;</button>
        <button className="scroll-arrow scroll-arrow-right">&#8594;</button>
    </div>

    <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
    <div className="box-image">
        <img src="./Assets/box1.jpg" alt="Image 1" height="100%" width="100%"/>
      </div> 
      <div className="box-content">
        <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
        <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
        <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
      </div>
    </div></Link>

    <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
    <div className="box-image">
        <img src="./Assets/box2.jpg" alt="Image 2" height="100%" width="100%"/>
      </div>
      <div className="box-content">
        <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
        <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
        <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
      </div>
    </div></Link>

    <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
    <div className="box-image">
        <img src="./Assets/box3.jpg" alt="Image 3" height="100%" width="100%"/>
      </div>
      <div className="box-content">
        <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
        <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
        <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
      </div>
    </div></Link>

    <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
    <div className="box-image">
          <img src="./Assets/box4.jpg" alt="Image 3" height="100%" width="100%"/>
        </div>
         <div className="box-content">
            <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
            <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
            <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>

      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
      <div className="box-image">
          <img src="./Assets/box5.jpg" alt="Image 3" height="100%" width="100%"/>
        </div>
        <div className="box-content">
            <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
            <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
            <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>

      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
     <div className="box-image">
          <img src="./Assets/box6.jpg" alt="Image 3" height="100%" width="100%"/>
        </div>
        <div className="box-content">
            <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
            <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
            <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>

      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
      <div className="box-image">
          <img src="./Assets/box7.jpg" alt="Image 3" height="100%" width="100%"/>
        </div>
        <div className="box-content">
            <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
            <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
            <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>

      <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div className="boxes">
      <div className="box-image">
          <img src="./Assets/box8.jpg" alt="Image 3" height="100%" width="100%"/>
        </div>
        <div className="box-content">
            <div className="date"> WED,MAY 24 . 12:30 AM IST </div>
            <div className="content" style={{    color: "black"}}> DevOps On Snowflake using Flyway</div>
            <div className="sub" style={{    color: "black"}}> New York Snowflake Meetup Group</div>
        </div>
      </div></Link>
  
  </div> 
  {/* scrolling boxes ends */} 
  {/* card sliding */}

<div class="container">

  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">

      <div class="carousel-item active">

        <div class="row">
        
          <div class="col-md-4">
           

          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}> <div class="card">

          <div class="card-content">

           <div class="card-header">

           <div class="card-logo">
                    <img src="./Assets/logo1.png" alt="Logo 1"width="70px" height="70px"/>
                  </div> 
                  <div class="card-heading" >
                    <h4 style={{fontSize:"20px"}}>New York New Business New Woman</h4>
                  </div>

                </div> 

                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">WED, MAY 24 · 3:30 AM IST</div>
                  <div class="content"> New York - New Business - New Woman</div>
                </div>

              </div>

            </div></Link>

          </div>
        
          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}> <div class="card">
              <div class="card-content">
                <div class="card-header">
                 <div class="card-logo">
                    <img src="./Assets/logo2.png" alt="Logo 2"width="70px" height="70px"/>
                  </div>
                 <div class="card-heading">
                    <h4>NYC 70,000+</h4>
                  </div> 
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">FRI, MAY 19 · 9:30 PM IST</div>
                  <div class="content">MATCHSTICKS PUZZLES - IQ GAME PARTY</div>
                </div>
              </div>
            </div></Link>
          </div>

          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo3.png" alt="Logo 3"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                    <h4 style={{fontSize:"20px"}}>Dashing Whippets Running Team</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">SAT, MAY 20 · 4:30 PM IST</div>
                  <div class="content">NYRR Brooklyn Half Marathon ✰ Points Race ✰</div>
                </div>
              </div>
            </div></Link>
          </div>

        </div>

      </div>

      <div class="carousel-item">
        <div class="row">

          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}> <div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo4.png" alt="Logo 4"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                    <h4 style={{fontSize:"20px"}}>Fabulous females seeking female friends over 50 for...</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">WED, MAY 17 · 9:30 PM IST</div>
                  <div class="content">Missoni Sample Sale/Non Group</div>
                </div>
              </div>
            </div></Link>
          </div>

          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo8.png" alt="Logo 8"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                    <h4>Carpe Diem</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">SUN, MAY 21 · 11:00 PM IST</div>
                  <div class="content">The Mini Golf Classic ⛳</div>
                </div>
              </div>
            </div></Link>
          </div>
          
          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}> <div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo6.png" alt="Logo 6"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                <h4>LES Pickleball NYC</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">SUN, MAY 21 · 7:30 PM IST</div>
                  <div class="content">SUNDAY Beginner Play</div>
                </div>
              </div>
            </div></Link>
          </div>

        </div>

      </div>

      <div class="carousel-item">

        <div class="row">

          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo7.png" alt="Logo 7"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                    <h4 style={{fontSize:"20px"}}>International Friend Connection - Main Group...</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">SAT, MAY 20 · 1:00 AM IST</div>
                  <div class="content">Meet Friends and Practice English with Native Speakers</div>
                </div>
              </div>
            </div></Link>
          </div>

          <div class="col-md-4">
          <Link to="/Third" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div class="card">
              <div class="card-content">
                <div class="card-header">
                  <div class="card-logo">
                    <img src="./Assets/logo8.png" alt="Logo 8"width="70px" height="70px"/>
                  </div>
                  <div class="card-heading">
                    <h4>Carpe Diem</h4>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-description">
                  <div class="date">SUN, MAY 21 · 11:00 PM IST</div>
                  <div class="content">The Mini Golf Classic ⛳</div>
                </div>
              </div>
            </div></Link>
          </div>
          
        </div>
      </div>

    </div>
    
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" style={{    backgroundColor: "black",
    marginTop: "10px",
    marginLeft: "-141px"}}></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" style={{    backgroundColor: "black",
    marginTop: "10px",
    marginLeft: "139px"}}></span>
      <span class="sr-only">Next</span>
    </a>

  </div>

</div>
{/* ends cards */} 
<br></br>
<br></br>
{/* phones and logo */}
  <div class="box-container"style={{marginLeft:"100px"}}>

    <div class="box2" style={{width:"30%",height:"700px"}}>
      <img src="./Assets/phone1.jpg" alt="Logo 8"width="100%" height="80%"/>
    </div>

    <div class="box2"style={{width:"35%",height:"700px"}}>

      <div class="content-box1" style={{marginLeft: "93px",
    marginTop: "8%"}} >
        <img src="./Assets/meetuplogo.jpg" alt="Logo" class="logo"  style = {{
    height: '100px',
    width: '100px',
    marginLeft: '188px'
  }}/>
        <div class="content-text1">
          <br></br>
          <br></br>
          <h4 style={{paddingLeft: "150px"}}>stay connected</h4>
          <h4 style={{paddingLeft: "150px"}}>download the app</h4>
          
          <button class="content-button1"  style = {{
    backgroundColor: 'black'
  }}>
            <img src="./Assets/apple.jpg" alt="Apple Logo" class="button-logo"width="30px" height="30px"/>
            <Link to="https://www.AppStore.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }}><span style={{color:"#fff"}}>Download on the App Store</span></Link>
          </button>
          <span> </span>
          <span></span>
          <span></span>
          <button class="content-button1" style = {{
    backgroundColor: 'black'
  }}>
            <img src="./Assets/playstore.jpg" alt="Play Store Logo" class="button-logo" width="30px" height="30px"/>
            <Link to="https://www.PlayStore.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }}><span  style={{color:"#fff"}}>Get it on Google Play</span></Link>
          </button>

        </div>
        
      </div>

    </div>
    
    <div class="box2"style={{width:"30%",height:"700px"}}>
      <img src="./Assets/phone2.jpg" alt="Logo 8"width="100%" height="80%"/>
    </div>

  </div>
  {/* phones and logo ends */}
  
 {/* mid ends */}
  <div style={{paddingBottom: "300px" , marginBottom: "10%"}}></div>

  <h3 style={{paddingLeft:"600px"}}>Stories of meetup</h3>
  <p style={{paddingLeft:"500px" ,paddingRight: "400px"}}>People on Meetup have fostered community, learned new skills, started businesses, and made life-long friends. Learn how.</p>
  {/* part 3 of page */}
<div style={{marginLeft: "60px"}}>
 {/* boxes to add story */}
 <Link to="/Tips" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="boxes">
    <div class="box-image">
      <img src="./Assets/story1.jpg" alt="Image 1" height="100%" width="100%"/>
    </div>
    <h4>8 Tips for Making the Most of Your Meetup Experience</h4>
    <p>A members guide for creating a Meetup account, joining new groups, and attending events.</p>
  </div> </Link>
  
  <Link to="/Tips" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}> <div class="boxes">
    <div class="box-image">
      <img src="./Assets/story2.jpg" alt="Image 2" height="100%" width="100%"/>
    </div>
    <div class="box-content">
      <h4>Tips for Making Friends as an Adult during Lonely Times</h4>
        <p style={{fontSize: "15px"}}>The global pandemic ushered in an epidemic of loneliness. Here are some simple, straightforward ways to overcome it by sparking new friendships.</p>
    </div>
  </div></Link>

  <Link to="/Tips" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}><div class="boxes">
    <div class="box-image">
      <img src="./Assets/story3.jpg" alt="Image 3" height="100%" width="100%"/>
    </div>
    <div class="box-content">
      <h4>A Simple Guide for New Hikers</h4>
        <p>Hiking is one of the most rewarding hobbies out there. Getting started can be intimidating if youve never done it before. With this guide, it wont be.</p>
    </div>
  </div></Link>

</div> 
{/*part 3 ends */}
{/* footer */}
<Footer newGroup={false} user={props.user}/>
{/*footer */}
</GoogleOAuthProvider>
</div>

        )
        
        
    }


export default Home;


