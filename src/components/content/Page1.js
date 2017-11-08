import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateGenderType, updateColorType} from '../../reducer';


const StyledPage1 = styled.div`
  background-color: white;
  border: 1px solid blue;
`;



class Page1 extends Component {
  
  render() {
    const { updateGenderType, updateColorType } = this.props;
    return (
      
      <StyledPage1>
        <div className="input">
   
            
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
            

              


              <div className="step__btn_container">
                <Link to="contact-info"><button className="drk-btn" >Next Step</button></Link>
              </div>
           
          </form>
        </div>
        
        

        
        </StyledPage1>
      
    )
  }
}

function mapStateToProps(state){
  const { gender , color } = state;
  return {
      gender,
      color
  };
}

export default connect(mapStateToProps, {updateGenderType, updateColorType, } ) (Page1); 


