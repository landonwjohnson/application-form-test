import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateGenderType, updateColorType, updateFirstNameType, updateLastNameType} from '../../reducer';


const StyledBasics = styled.div`
  background-color: white;
`;

const FormBody=styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin: 10%;
border: 1px black solid;
`;



class Basics extends Component {
  
  render() {
    const { updateGenderType, updateColorType, updateFirstNameType, updateLastNameType } = this.props;
    return (
      
      <StyledBasics>
        <form className="basics-form">
        <FormBody>
   
            
              <br/>
          
              <div className="avatar-container">
                  <div className="avatar">
                  </div>
              </div>

              <input type="file" name="datafile" size="50" />
              <br/>
              <label>What's your name</label>
              <br/>
              <input 
                className="name-input input-field"
                style={{"border-bottom": `solid ${this.props.color}`}}
                placeholder="First"
                type="text" 
                onChange={ ( e ) => updateFirstNameType(e.target.value)}
                required
              />
              <input 
                className="name-input input-field"
                style={{"border-bottom": `solid ${this.props.color}`}}
                placeholder="Last"
                type="text" 
                onChange={ ( e ) => updateLastNameType(e.target.value)}
                required
              />
              <br/>
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
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="pink">Pink</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                        <option value="teal">Teal</option>
                  </select>
                  <br/>

             
            

              


              <div className="step__btn_container">
                <Link to="/page/2"><button className="drk-btn" style={{"background":`${this.props.color}`}} >Next Step</button></Link>
              </div>
           
          
        </FormBody>
        </form>
        

        
        </StyledBasics>
      
    )
  }
}

function mapStateToProps(state){
  const { gender , color, firstName, lastName } = state;
  return {
      firstName,
      lastName,
      gender,
      color,
  };
}

export default connect(mapStateToProps, {updateGenderType, updateColorType, updateFirstNameType, updateLastNameType } ) (Basics); 


