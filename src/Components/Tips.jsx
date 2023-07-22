import React from 'react';
import '../Styles/tips.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { GoogleOAuthProvider ,GoogleLogin } from '@react-oauth/google'; 
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };


const Tips =(props) => {
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
             <div class="menu8t-bar">
             <Link to="/" style={{
        textDecoration: 'none',
        outline: 'none',
      }} onClick={scrollToTop}><div class="logo8t">
          <img src="./Assets/meetuplogo.jpg" alt="Logo"/>
        </div></Link>
        <h1 class="company8t-name" style={{marginLeft: "2px"}}>Community matters</h1>
        <nav class="menu8t-options">
          <ul style={{marginLeft: "24px"}}>
            <li><a href="#">Organizer Guide</a></li>
            <li><a href="#">Keep Connected Podcast</a></li>
            <li><a href="#">Meetup Live</a></li>
            <li><a href="#">Local Guides</a></li>
            <li><a href="#">Product Updates</a></li>
           <li> <i class="bi bi-search"></i></li>
           <li><button class="btn btn-primary">Get the newsletter</button></li>
          </ul>
        </nav>
      </div>

      <div class="container8t">
        <div class="box8t">
          <div class="box8t-content">
            <div class="story">STORIES</div>
            <h2 class="box8t-heading">8 Tips for Making the Most of Your Meetup Experience</h2>
            <p class="box8t-text">A member’s guide for creating a Meetup account, joining new groups, and attending events..</p>
          </div>
          <div class="box8t-image">
            <img src="./Assets/8tips1.jpg" alt="Image"/>
          </div>
        </div>
      </div>
      <div class="container28t">
        <div class="logo28t">
          <img src="./Assets/james.jpg" alt="Logo"/>
        </div>
        <div class="company-info28t">
          <h1 class="company-name28t">By James Quigley</h1>
        </div>
      </div>
      <div class="container38t">
        <div class="box28t">
          <div class="left">
            <h2 class="heading">share</h2>
            <div class="social-icons18t">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div class="right">
            <p>The time you spend with Meetup is an investment in yourself. Expanding your social circle, pursuing your hobbies, discovering new opportunities, adventuring through the world around you—these are the kinds of benefits you should get to experience as a Meetup member. </p>
            <p>If you’re interested in taking advantage of all that Meetup has to offer, follow these eight tips for maximizing your membership. Getting started is free and easy. With this guide, you’ll have no trouble making genuine human connections in a community that suits you. </p>
          </div>
        </div>
      </div>
      <div class="container48t">
        <div class="box38t">
          <div class="box38t-content">
            <h2 class="box38t-heading">1. Create your account</h2>
            <p>It all starts here. Your Meetup account is the cornerstone of this friend platform. While you don’t need to register to simply view groups and events, you will need an account to get updates, join groups, and attend events. So sign up for a Meetup account today! There’s no cost to join Meetup as a member, and you’ll be exploring worlds of social possibility in minutes.  </p>
            <h2 class="box38t-heading">2. Find events</h2>
            <p>It’s super intuitive. Finding an event is as easy as plugging in your location and a topic to the search bar on Meetup’s Find page. There are several filters to help you narrow down your search and land on exactly what you had in mind. You can limit your search to specific dates, times, locations, and categories. Or, if you’re feeling bold, try out the Starting Soon filter to dive into an event happening in the next hour! </p>
            <h2 class="box38t-heading">3. Download the app </h2>
            <p>Having Meetup at your fingertips means you can stay connected to your communities on the go. With a sleek look and easy-to-use interface, the Meetup mobile app is a must-have for socialites across the globe. In fact, travel experts recommend using Meetup while vacationing to meet locals and discover authentic social experiences in a new city.  </p>
            <h2 class="box38t-heading">4. Join your first group </h2>
            <p>Joining a group ensures that you’ll receive a notification each time that group hosts a new event. With one click, you can become an active and valued member of whatever community inspires you, whether you’re into running, visiting art galleries, or just some run-of-the-mill underwater hockey!   </p>
            <p>One community that stands out as a great option for newcomers is Meetup Live. With more than 99,000 members, it’s the single largest group on Meetup, and it has weekly events on topics such as: 
                <ul>
                    <li>Career advice </li>
                    <li>Making friends </li>
                    <li>Getting the most out of your Meetup experience </li>
                    <li>Mindfulness </li>
                    <li>Picking up new hobbies </li>
                    <li>Current Events</li>
                </ul>
            </p>
            <img src="./Assets/underwater.jpg" alt="looo"/>
            <h2 class="box38t-heading">5.  Make new friends by attending events</h2>
            <p>If you’re feeling any anxiety about the small talk aspect of attending your first event with a new group, check out this helpful guide for having a conversation with someone you just met. The best advice is to just be yourself, and know that a little awkwardness is 100% normal. Don’t give up: try connecting over the shared interests that brought the two of you to this event in the first place.  </p>
            <p>Like any skill, it can take some practice to get the hang of vibing with a new group. In general, it’s best to attend a group’s events more than once before quitting. In the end, a group may not be a good fit for you after all, and that’s okay! There are plenty of fish in the sea. But you’ll struggle to make real connections if you don’t give them a sincere try. </p>
            <h2 class="box38t-heading">6. Follow Meetup on social media </h2>
            <p>If you want to stay up-to-date with all the happenings on the platform, you can follow Meetup on Facebook, Twitter, Instagram, TikTok, and LinkedIn. These pages often share stories from real people having real fun all around the world through Meetup. Plus, you never know who you might connect with as mutual followers! </p>
            <h2 class="box38t-heading">7.  Listen to Meetup’s Keep Connected podcast </h2>
            <p>Keep Connected, hosted by Meetup CEO David Siegel, is a conversation show about the power of community. Tune in to hear inspiring stories of how Meetup connections have changed lives, and learn from experts who demonstrate how bringing people together leads to health, happiness, and success. You may be inspired to branch out more, or even start your own Meetup group. </p>
            <h2 class="box38t-heading">8. Once you find your way, stick with it</h2>
            <p>When you feel like you’ve got the hang of the platform, be free to explore whatever, whenever, however you want! Connecting over shared passions is a beautiful part of life that can’t be boxed up into a single shape or size. As long as you’re having fun, you’re doing it right.</p>
            <div class="sub8t">Last modified on March 17, 2022</div>
          </div>
        </div>
      </div>
      <h2 class="rep" >Related</h2>
      <div class="container58t">
        <div class="box48t">
          <img src="./Assets/st1.jpg" alt="Image 1" class="box48t-image"/>
          <div class="box48t-content">
            <div class="story">STORIES</div>
            <h2 class="box48t-heading">Five Awesome Ways to Use ChatGPT </h2>
            <p>ChatGPT is an artificial intelligence program changing the way computers (and people!) think. Learn some cool ways to use this powerful technology.</p>
          </div>
        </div>
        <div class="box48t">
          <img src="./Assets/st2.jpg" alt="Image 2" class="box48t-image"/>
          <div class="box48t-content">
            <div class="story">STORIES</div>
            <h2 class="box48t-heading">Celebrating Pride on Meetup</h2>
            <p>These Meetup groups are building supportive, inclusive, and fun communities for LGBTQ+ members worldwide all year long.</p>
          </div>
        </div>
        <div class="box48t">
          <img src="./Assets/st3.jpg" alt="Image 3" class="box48t-image"/>
          <div class="box48t-content">
            <div class="story">STORIES</div>
            <h2 class="box48t-heading">Get More Steps for National Walking Month </h2>
            <p>LEveryone knows walking is a good form of exercise, but some of its lesser-known benefits might surprise you. Learn how to get moving for fun and fitness.</p>
          </div>
        </div>
        <div class="box48t">
          <img src="./Assets/st4.jpg" alt="Image 4" class="box48t-image"/>
          <div class="box48t-content">
            <div class="story">STORIES</div>
            <h2 class="box48t-heading">Harvard’s Famous Study on Happiness Might Surprise You </h2>
            <p>Investment in social relationships is more predictive of future health than things like genetics, social class, and education. Learn how to establish community for your long-term happiness.</p>
          </div>
        </div>
      </div>
      
    <div class="container68t">
    <div class="box58t">
      <div class="part part-1">
        <h2 class="part-heading">Do more of what you love</h2>
        <div class="links18t">
          <a href="#">Find an event</a>
          <a href="#">Start a group</a>
          <a href="#">Get the app</a>
        </div>
      </div>
      <div class="part part-2">
        <ul>
     {
    props.user ? null :<li
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal" 
    >
     SignUp
     </li>
}
 
{
    props.user ? <><li onClick={logout}> Logout </li></>:<li
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal" 
       >
        Login 
        </li>
} 
          
          <li>Help</li>
        </ul>
      </div>
      
      <div class="part part-3">
        <ol style={{paddingLeft: "2px",paddingTop: "20px"}}>
          <li>About</li>
          <li>Decide & Conquer Book</li>
          <li>Pro</li>
        </ol>
      </div>
      <div class="part part-4">
        <h2 class="part-heading">Follow Us</h2>
        <div class="social-icons28t">
          <div class="icon-box">
            <Link to="https://www.instagram.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
        marginTop:" 23px"
      }} class="fab fa-instagram" ></Link>
          </div>
          <div class="icon-box">
          <Link to="https://www.twitter.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
        marginTop:" 23px"
      }} class="fab fa-twitter" ></Link>
          </div>
          <div class="icon-box">
          <Link to="https://www.LinkedIn.com" style={{
        textDecoration: 'none',
        outline: 'none',
        color:'black',
        marginTop:" 23px"
      }} class="fab fa-linkedin"></Link>
          </div>
        </div>
    </div>
  </div>
  </div>
 <div class="container78t">
    <div class="box68t">
        <ul>
            <li>Terms of Service</li>
            <li> Privacy Policy</li>
            <li> Cookie Policy</li>
        </ul>
    </div>
 </div>
  
 
  <script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
  </GoogleOAuthProvider>
      </div>
      

    );
};
export default Tips;