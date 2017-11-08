import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updatePhoneInfo} from '../../reducer';


const StyledContactInfo = styled.div`
  background-color: white;
  border: 1px solid blue;
`;



class ContactInfo extends Component {
  
  render() {
    const { updatePhoneInfo } = this.props;
    return (
      
      <StyledContactInfo>
        <div className="input">
          <form>
              <input type="number"
                placeholder="000-000-000"
                onChange={ ( e ) => updatePhoneInfo(e.target.value)}
              />
              
              <div className="step__btn_container">
                <button className="drk-btn" >Next Step</button>
              </div>
           
          </form>
        </div>
        
        

        
        </StyledContactInfo>
      
    )
  }
}

function mapStateToProps(state){
  const { phoneNumber } = state;
  return {
      phoneNumber
  };
}

export default connect(mapStateToProps, { updatePhoneInfo } ) (ContactInfo); 


