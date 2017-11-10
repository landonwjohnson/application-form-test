import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updatePhoneInfo, updateSnapchatInfo, updateFacebookInfo, updateInstagramInfo, updateTwitterInfo} from '../../reducer';



const FormBody=styled.div`
width: 100%;
margin: 10%;
height: 100%;
`;



class ContactInfo extends Component {
  
  render() {
    const { updatePhoneInfo, updateSnapchatInfo, updateFacebookInfo, updateInstagramInfo, updateTwitterInfo } = this.props;
    return (
      
      <FormBody>
        <div className="input">
          <form>
              <label>Phone Number</label>
              <input type="number"
                placeholder="000-000-000"
                onChange={ ( e ) => updatePhoneInfo(e.target.value)}
              />
              <br/>
              <br/>
              <label>Facebook</label>
              <input type="text"
                placeholder="URL"
                onChange={ ( e ) => updateFacebookInfo(e.target.value)}
              />
              <br/>
              <br/>
              <label>Instagram</label>
              <input type="text"
                placeholder="Username"
                onChange={ ( e ) => updateInstagramInfo(e.target.value)}
              />
              <br/>
              <br/>
              <label>Twitter</label>
              <input type="text"
                placeholder="Username"
                onChange={ ( e ) => updateTwitterInfo(e.target.value)}
              />
              <br/>
              <br/>
              <label>Snapchat</label>
              <input type="text"
                placeholder="Username"
                onChange={ ( e ) => updateSnapchatInfo(e.target.value)}
              />
              <br/>
              <br/>
              
              <div className="step__btn_container">
                <Link to="/finished"><button className="drk-btn" style={{"background":`${this.props.color}`}} >Next Step</button></Link>
              </div>
          </form>
        </div>
        
        

        
        </FormBody>
      
    )
  }
}

function mapStateToProps(state){
  const { phoneNumber, twitter, facebook, snapchat, instagram } = state;
  return {
      phoneNumber
  };
}

export default connect(mapStateToProps, { updatePhoneInfo, updateFacebookInfo, updateInstagramInfo, updateSnapchatInfo, updateTwitterInfo } ) (ContactInfo); 


