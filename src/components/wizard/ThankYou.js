import React, { Component } from 'react';
import router from '../../router';
import TwitterIcon from '../../img/social/Twitter.png';
import BehanceIcon from '../../img/social/Behance.png';
import FacebookIcon from '../../img/social/Facebook.png';
import LinkedInIcon from '../../img/social/Linkedin.png';
import YouTubeIcon from '../../img/social/YouTube.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const FormBody=styled.div`
width: 100%;
margin: 10%;
height: 100vh;
`;
class ThankYou extends Component {
  render() {
    return (
      <div>
       
        <h1>Thank You!</h1>
        <h6>While waiting for me to respond, feel free to follow me on social media and check out the results from this application</h6>
        <div className="contact-wrapper"> 
                <div className="social-media-icons">
                    <a href="http://bit.ly/landonwjohnson-on-facebook" target="blank" className="social-icon"><img src={FacebookIcon} /> </a>
                    <a href="http://bit.ly/landonwjohnson-on-twitter"  target="blank" className="social-icon"><img src={TwitterIcon} /> </a>
                    <a href="http://bit.ly/landonwjohnson-on-behance" target="blank" className="social-icon"><img src={BehanceIcon} /> </a>
                    <a href="http://bit.ly/landonwjohnson-on-youtube" target="blank" className="social-icon"><img src={YouTubeIcon} /> </a>
                    <a href="http://bit.ly/landonwjohnson-on-linkedin" target="blank" className="social-icon"><img src={LinkedInIcon} /> </a>
                </div>
        </div>
        <Link to="stats"><button>Results</button></Link>
      
      </div>
      
      
    );
  }
}

export default ThankYou