import React from 'react';
import '../Styles/third.css';
import Header from './Header';
import Modal  from 'react-modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};


const Third = (props) => {


  
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const customStyles = {
    content: {
      width: "70vw",
      height:"440px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",

    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };


    return(
        <div >    
            <Header newGroup={false} user={props.user}/>               
<hr className="header-line"/>
  <h1 style={{paddingLeft: "20px",paddingTop:0,fontSize: "35px"}}>Making Friends Online</h1>
  <div className="boxm3">
    
      <div className="logom3">
      <img src="./Assets/logom.jpg" alt="Logo"/>
    </div>
    <div className="contentm3">
      <h4>Hosted By</h4>
      <p>Gabriel and Natalia</p>
    </div>
  </div>
  <hr className="header-line"/>
  <div className="mm">
  <div className="containerm1" >
    <div className="boxm1 boxm1-large">
        <div className="scrollable-contentm1">
        <img src="./Assets/mf01.jpg" className="scm1" alt="Example Image"/>
       <div className="detailsm1">
        <h4>Details</h4>
        <p>In the Social Lounge community, we believe that friendship is essential for our happiness.</p>
        <p>🎉 Join us for a thoughtful discussion about the meaning of friendship and how to create strong connections in the virtual world. Share your experiences and insights with like-minded individuals and engage in mindful conversations. 🤝</p>
        <p>🌎 Our event is the perfect opportunity to connect with people from all over the world and share your thoughts on the topic of friendship. You'll leave with a deeper understanding of what it takes to form lasting relationships online. 💻</p>
        <p>💬 This event is an excellent opportunity for you to share your experiences and connect with people worldwide. Don't miss out on this chance to expand your social circle and make meaningful connections with others. 🌐</p>
        <p>👋 We can't wait to see you there! 😊</p>
        <p>🌍 Experience a vibrant social atmosphere and expand your network by joining Social Lounge for entertaining and engaging events.</p>
        </div>
        <h4>Event Topics</h4>
        <div className="button-container">
          
          <button>Social</button>
          <button>Make New Friends</button>
          <button>Socializing</button>
          <button>Virtual Meetings</button>
          <button>International Friends</button>
         
        </div>
        <h3 style={{margin:"25px"}}> Attendees</h3>
        <div className="inner-box">
          <div className="card">
            <img src="./Assets/mf1.jpg" alt="Logo 1" height="75px" width="75px" style={{borderRadius:" 45%"}}/>
            <h6>Gadriel</h6>
            <p>Event Organizer</p>
          </div>
          <div className="card">
            <img src="./Assets/mf2.jpg" alt="Logo 2" style={{borderRadius:" 45%"}}/>
           <h6>Natalia</h6>
            <p>Event Organizer</p>
          </div>
          <div className="card">
            <img src="./Assets/mf3.jpg" alt="Logo 3"style={{borderRadius:" 45%"}}/>
            <h6>BNKToP</h6>
            <p>Member</p>
          </div>
          <div className="card">
            <img src="./Assets/mf4.jpg" alt="Logo 4"style={{borderRadius:" 45%"}}/>
            <h5 style={{color: "#00798a", padding: "10px"}}>See All Members</h5>
            
          </div>
          <div className="show-more">
            <button id="show-more-button">Show More</button>
          </div>
        </div>
        <h3 style={{margin:"25px"}}> Photos</h3>
        <div className="box-container">
          <div className="box-small">
            <img src="/Assets/mf01.jpg" alt="Example Image"/>
          </div>
          <div className="box-small">
            <div className="bi bi-camera"style={{marginLeft: "5px"}}></div>
          </div>
          <div className="box-small">
             <div className="bi bi-camera" style={{marginLeft: "5px"}}></div>
          </div>

        </div>
        <div className="box11-container">
          <div className="box11-small">
            <div className="row11">
              <div className="col-auto">
                <img src="/Assets/logo11.png" alt="Logo" className="logo11"/>
              </div>
              <div className="col">
                <h5>International Friend Connection - Main Group with Zoom Links</h5>
                <p>see more content</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    <div className="boxm1" >
      <div className="box12-container">
        <div className="box12-small">
          <div className="row11">
            <div className="col-auto">
              <img src="/Assets/logo11.png" alt="Logo" className="logo11"/>
            </div>
            <div className="col" style={{fontSize: "1px"}}>
              <h6>International Friend Connection - Main Group with Zoom Links</h6>
              <p>public group ?</p>
            </div>
          </div>
        </div>
    </div>
    <div className="box13-container">
      <div className="box12-small">
        <div className="row11">
          <div className="col-auto">
            <i className="bi bi-clock logo12"></i>
          </div>
          <div className="col">
            <div>Thursday, June 8, 2023 at 11:30 PM to</div>
            <div>Friday, June 9, 2023 at 1:30 AM IST</div>
          </div>
        </div>
        <div className="row11">
          <div className="col-auto">
            <i className="bi bi-camera-video logo12"></i>
          </div>
          <div className="col" style={{fontSize: "1px"}}>
            <p >
            <div style={{fontSize: "16px"}}>Online event</div>
            <div style={{fontSize: "16px"}}>Link visible for attendees</div>
            </p>
          </div>
        </div>
      </div>
  </div>
  <h3>Sponsers</h3>
  <div className="box14-container">
    <div className="box14-small">
      <div className="row11">
        <div className="col-auto">
          <img src="/Assets/logo111.jpg" alt="Logo" className="logo14"/>
        </div>
        <div className="col" style={{fontSize: "1px"}}>
          <h6>start a meet up</h6>
          <p style={{fontSize: "16px"}}>Start a meet up group .we will get a commision when you subscribe</p>
        </div>
      </div>
    </div>
</div>

    </div>
  </div>
  </div>
  <div className="boxa">
    <div className="boxa-content">
    
      <h4 className="box-heading">THU, JUN 8 · 11:30 PM IST</h4>
      <p>Making Friends Online.</p>
    </div>
    <div className="boxa-buttons"  >
      <button className="btn1">
        <i className="bi bi-currency-dollar"></i> Free
      </button>
      <button className="btn2">
        <i className="bi bi-share"></i> Share
      </button>
      <button className="btn3"  onClick={handleOpenModal}>
        <i className="bi bi-play-circle"></i> Attend Online
      </button>
      <Modal 
                   
                  isOpen={showModal}
                  onRequestClose={handleCloseModal}
                  contentLabel="Modal"
                  ariaHideApp={false}
                  
                >
                  <h2>Select Package Options</h2>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    margin: "25px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                    lineHeight: 2,
                   
                  }}
                >
                  <div>
                    <h3>Trip to Gokarna Beach without Transportation</h3>
                    <i className="bi bi-clock"></i>
                    <span>3 days, 2 nights</span>
                    <h5 style={{ color: "red" }}>Show Details</h5>
                  </div>

                  <div>
                    <h6>
                      <s style={{ color: "gray" }}>INR 4,599</s>
                    </h6>
                    <h3 style={{ color: "red" }}>INR 2,625</h3>
                    <h6 style={{ color: "gray" }}>Per Adult</h6>
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    margin: "25px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                    lineHeight: 2,
                  }}
                >
                  <div>
                    <h3>Trip to Gokarna Beach with Transportation</h3>
                    <i className="bi bi-clock"></i>
                    <span>3 days, 2 nights</span>
                    <h5 style={{ color: "red" }}>Show Details</h5>
                  </div>

                  <div>
                    <h6>
                      <s style={{ color: "gray" }}>INR 4,599</s>
                    </h6>
                    <h3 style={{ color: "red" }}>INR 1,750</h3>
                    <h6 style={{ color: "gray" }}>Per Adult</h6>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="btn-order model-btn"
                >
                  Close 
                </button>
                <button style={{marginLeft: "1105px"}} >Pay Now</button>
              </Modal>
    </div>
  </div>

  <Footer newGroup={false} user={props.user}/>
</div>

);
}




export default Third;