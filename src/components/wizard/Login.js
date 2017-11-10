import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateBirthdayType, updateZip} from '../../reducer';


const LoginPage = styled.div`
  background-color: white;
  margin: 10%;
`;

const FormBody=styled.div`
width: 100%;

`;



class Login extends Component {
  

  render() {
    const {updateBirthdayType, updateZip} = this.props;
 
    return (
      
      <LoginPage>
        <form>
        <FormBody>
   
            
              
          
          <div className="or-container">

              <div className="or-left">
                <div className="fb-connect-btn"> Autofill with Facebook </div>
              </div>

              <div className="-or-">
                <div className="or-divider"></div>
                <label class="or-text"> OR </label>
                <div className="or-divider"></div>
              </div>
              
              
              
              <div className="or-right">
                  <div class="getBirthdayContainer">
                      <label>Birthday</label>
                      <select className="birth-input">
                        <option><label>MM</label></option>
                      </select>
                      <select className="birth-input">
                        <option>DD</option>
                      </select>
                      <select className="birth-input">
                        <option className="date-text">YY</option>
                      </select>
                      <p>You must be 18 or older to fill out this form (this will appear if the age input is not vaild)</p>
                  </div>

                  <div class="getLocationContainer">
                      <label>Zipcode</label>
                      <input 
                        className="location-input"
                        type="number" 
                        onChange={ ( e ) => updateZip(e.target.value)}
                      />
                  </div>
                  {/* <input
                    className="date-input"
                    type="date"  
                    onChange={ ( e ) => updateBirthdayType(e.target.value)} required
                    required
                  /> */}


                  <div className="enter__btn_container">
                      <Link to="/page/1"><button className="drk-btn" >Enter</button></Link>
                  </div>
              </div>
          </div>

             
            

              


              
           
          
        </FormBody>
        </form>
        

        
        </LoginPage>
      
    )
  }
}

function mapStateToProps(state){
  const { birthday, zip } = state;
  return {
      birthday,
      zip
  };
}

export default connect(mapStateToProps, { updateBirthdayType, updateZip } ) (Login); 


