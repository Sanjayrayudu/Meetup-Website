import '../Styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { GoogleOAuthProvider ,GoogleLogin } from '@react-oauth/google'; 
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Footer = (props) => {
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
<footer className="footer" style={{marginTop:"100px"}}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p>Create your own Meetup group</p>
      </div>
      <div className="col-md-6">
        <Link to = "/" onClick={scrollToTop}><button className="btn btn-primary" style = {{
    backgroundColor: 'black',
    border: 'solid #fff',
  }}>get started</button></Link>
      </div>
    </div>
    <hr className="footer-line"></hr>
    <section className=""> </section>
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              your account
            </h6>
            {
    props.user ? null :<p><a href="#!" className="text-reset"
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal" 
    >
     SignUp
     </a></p>
}  
{
    props.user ? <><p><a href="#!" className="text-reset" onClick={logout}> Logout </a></p></>:<p><a href="#!" className="text-reset"
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal" 
       >
        Login 
        </a></p>
}  
            <p>
              <a href="#!" className="text-reset">Help</a> 
            </p>
            <p>
              <a href="#!" className="text-reset" >Become an Affiliate</a>
            </p>
          </div>
         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Discover
            </h6>
            <p>
            <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop} className="text-reset">Groups</Link>
            </p>
            <p>
            <Link to="/Connect" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}  className="text-reset">Calendar</Link>
            </p>
            <p>
            <Link to="/Connect" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}  className="text-reset">Topics</Link>
            </p>
            <p>
            <Link to="/Outdoors" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}  className="text-reset">cities</Link>
            </p>
            <p>
            <Link to="/Outdoors" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}  className="text-reset">Online Events</Link>
            </p>
            <p>
            <Link to="/JoinGroup" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }} onClick={scrollToTop}  className="text-reset">Local Guides</Link>
            </p>
          </div>
          
  
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              Meetup  
            </h6>
            <p>
              <a href="#!" className="text-reset">About</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Blog</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Meetup Pro</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Careers</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Apps</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Podcast</a>
            </p>
          </div>
    </div>
    <h5 style = {{
    marginLeft: 0,
    paddingLeft: 0,
    }}>Follow us</h5>
    <div className="social-icons">
      <a href="https://www.instagram.com"><i className="bi bi-instagram"></i></a>
      <a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>
      <a href="https://www.youtube.com"><i className="bi bi-youtube"></i></a>
      <a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a>
      <a href="https://www.tiktok.com/"><i className="bi bi-tiktok"></i></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="https://www.AppStore.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }}><button className="content-button1"   style={{ backgroundColor: 'black', textAlign: 'end' }}>
        <img src="./Assets/apple.jpg" alt="Apple Logo" className="button-logo"width="30px" height="30px"/>
        <span style={{color:'#fff'}}>Download on the App Store</span>
      </button></Link>
      <Link to="https://www.PlayStore.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
      }}><button className="content-button1" style={{ backgroundColor: 'black',  marginLeft:'30px', textAlign: 'end' }}>
        <img src="./Assets/playstore.jpg" alt="Play Store Logo" className="button-logo" width="30px" height="30px"/>
        <span  style={{color:'#fff'}}>Get it on Google Play</span>
      </button></Link>
       
  <div className="text-center p-4" style={{ backgroundColor: 'black',marginTop:'25px', textAlign: 'end' }}> 
    © 2023:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: 'small',textDecoration: 'none' }}> Meetup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Terms of Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Cookie Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Help</a>
  </div>
  
  </div>
</div>
</div>

</footer> 
</GoogleOAuthProvider> 
        </div>
    )

  }
  export default Footer;