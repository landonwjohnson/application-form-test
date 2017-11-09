import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateBirthdayType} from '../../reducer';


const LoginPage = styled.div`
  background-color: white;
  margin: 10%;
`;

const FormBody=styled.div`
width: 100%;

`;



class Login extends Component {
  

  render() {
    const {updateBirthdayType} = this.props;
 
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
                  </div>

                  <div class="getLocationContainer">
                      <label>Zipcode</label>
                      <input 
                        className="location-input"
                        type="number" 
                      />
                  </div>
                  {/* <input
                    className="date-input"
                    type="date"  
                    onChange={ ( e ) => updateBirthdayType(e.target.value)} required
                    required
                  /> */}


                  <div className="enter__btn_container">
                      <Link to="/page/1"><button className="enter-button" >Enter</button></Link>
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
  const { birthday } = state;
  return {
      birthday,
  };
}

export default connect(mapStateToProps, { updateBirthdayType } ) (Login); 


