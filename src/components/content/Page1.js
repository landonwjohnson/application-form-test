import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateGenderType, updateColorType, updateBirthdayType, updateEducationType} from '../../reducer';


const StyledPage1 = styled.div`
  background-color: white;
`;

const FormBody=styled.div`
width: 100%;
margin: 10%;

`;



class Page1 extends Component {
  
  render() {
    const { updateGenderType, updateColorType, updateBirthdayType, updateEducationType } = this.props;
    return (
      
      <StyledPage1>
        <FormBody>
   
            
              <br/>
          <form>
              <h1>Input</h1>
            

              <label>Gender</label>
              <br/>
                  <select onChange={ ( e ) => updateGenderType(e.target.value)} required>
                    <option></option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
              <br/>



              <label> What's your favorite color? </label>
                  <select onChange={ ( e ) => updateColorType(e.target.value)} required>
                        <option></option>
                        <option value="red" style={{"background-color":"red"}}>Red</option>
                        <option value="blue" style={{"background-color":"blue"}}>Blue</option>
                        <option value="green" style={{"background-color":"green"}}>Green</option>
                        <option value="pink" style={{"background-color":"pink"}}>Pink</option>
                        <option value="purple" style={{"background-color":"purple"}}>Purple</option>
                        <option value="orange" style={{"background-color":"orange"}}>Orange</option>
                        <option value="teal" style={{"background-color":"teal"}}>Teal</option>
                  </select>
                  <br/>
              <label> Birthday </label>
              <br/>
                  <input type="date"  
                    onChange={ ( e ) => updateBirthdayType(e.target.value)} required
                    required
                  />
              <br/>

              <label> Highest Education </label>
              <br/>
              <select onChange={ ( e ) => updateEducationType(e.target.value)} required>
                    <option></option>
                    <option value="Highschool">Highschool Diploma</option>
                    <option value="Associates">Associate’s Degree</option>
                    <option value="Bachelors">Bachelor's Degree</option>
                    <option value="Masters">Master's Degree</option>
              </select>
            

              


              <div className="step__btn_container">
                <Link to="contact-info"><button className="drk-btn" >Next Step</button></Link>
              </div>
           
          </form>
        </FormBody>
        
        

        
        </StyledPage1>
      
    )
  }
}

function mapStateToProps(state){
  const { gender , color, birthday, education } = state;
  return {
      gender,
      color,
      birthday,
      education
  };
}

export default connect(mapStateToProps, {updateGenderType, updateColorType, updateBirthdayType, updateEducationType } ) (Page1); 


