import '../Styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { GoogleOAuthProvider ,GoogleLogin } from '@react-oauth/google'; 
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

const Header =(props)=>{
  
 let onSuccess = (credentialResponse) => {
        let token = credentialResponse.credential;
        try{
        let data =jwt_decode(token);
        localStorage.setItem("meetup_auth_token",token);
        alert("Login Successfully");
        window.location.assign("/");
        }catch(error){
         console.log(error);
        }
      };
      let onError = () => {
        console.log('Login Failed');
        localStorage.removeItem("meetup_auth_token");
      };
      let logout = () =>{
        localStorage.removeItem("meetup_auth_token");
        window.location.reload();
      }
    return(
        <div>
            <GoogleOAuthProvider clientId="614438783556-vh61iouagb29dfvi6elbsphp3n9je252.apps.googleusercontent.com">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login / SignUp</h1>
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
<header>
    <div className="logo">
        
       <Link to="/"> <img src="./Assets/logo.jpg" alt="Meetup Logo"/> </Link>
      <div className="search-bar-container">
        
       
        <input type="text" className="form-control search-bar" placeholder="Search..."/>
        
      </div>
      <div className="location-bar-container">
      <button className="btn btn-primary search-button" style={{backgroundColor: "red"}}><i className="fas fa-search search-icon"></i></button>
        <input type="text" className="form-control location-bar" placeholder="Location..."/>
    
       
      </div>
      </div> 
      {props.newGroup === false ?  null : <a href="#" className="link-group" style={{    marginRight: "-490px"}}>Start a New Group</a>}
    <div className="right-section" style={{marginLeft: "60px",
    marginTop: "0px"}}>

      {/* <button className="login-button">Login</button> */}
<div>
{  
    props.user ? ( <><div className="language-dropdown" style={{marginLeft: "180px"}}>
    <a href="#" className="language-selector">
      <i className="bi bi-globe2 globe-icon"></i>Language Selector
    </a>
    <div className="language-dropdown-content">
      <a href="#">English</a>
      <a href="#">Spanish</a>
      <a href="#">French</a>
      
    </div>
    </div>
    <button className = "btn btn-light" >Welcome , {props.user.name}</button>
    <button className='signup-button' onClick={logout}>Logout</button>
    </> 
    ): (<>
      <div className="language-dropdown" style={{marginLeft: "180px"}}>
              <a href="#" className="language-selector">
                <i className="bi bi-globe2 globe-icon"></i>Language Selector
              </a>
              <div className="language-dropdown-content">
                <a href="#">English</a>
                <a href="#">Spanish</a>
                <a href="#">French</a>
                
              </div>
            </div>
    <button type="button" className="signup-button"
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal" 
       >
        Login / SignUp
        </button> </>
)}  
    </div>
    </div>
  </header>
  </GoogleOAuthProvider> 
  </div>
    );
};


export default Header;