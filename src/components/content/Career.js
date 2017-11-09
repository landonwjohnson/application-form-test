import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { updateEducationType } from './../../reducer';


const FormBody=styled.div`
width: 100%;
margin: 10%;
height: 100%;
`;



class Career extends Component {
  
  render() {
    return (
      
      <FormBody>
      <form>
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
            <Link to="/finished"><button className="drk-btn" style={{"background":`${this.props.color}`}} >Next Step</button></Link>
            </div>
     </form>

        
        </FormBody>
      
    )
  }
}

function mapStateToProps(state){
    const { education } = state;
    return {
        education
    }
}


export default connect(mapStateToProps, { updateEducationType } ) (Career); 


