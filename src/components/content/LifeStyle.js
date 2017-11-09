import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { updateDrinksType, updateSmokesType, updateHeightType, updateWeightType } from './../../reducer';


const FormBody=styled.div`
width: 100%;
margin: 10%;
height: 100%;
`;



class LifeStyle extends Component {
  
  render() {
    const { updateDrinksType, updateSmokesType, updateHeightType, updateWeightType } = this.props;
    
    return (
      
      <FormBody>
      <form>
            <label> Weight </label>
            <br/>
            <input type="number" onChange={ ( e ) => updateWeightType(e.target.value)} required />
            <br/>
            <label> Do you smoke? </label>
            <br/>
            <select onChange={ ( e ) => updateSmokesType(e.target.value)} required>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <br/>

            <label> Do you drink? </label>
            <br/>
            <select onChange={ ( e ) => updateDrinksType(e.target.value)} required>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <br/>
            <div className="step__btn_container">
            <Link to="/page/4"><button className="drk-btn" >Next Step</button></Link>
            </div>
     </form>

        
        </FormBody>
      
    )
  }
}

function mapStateToProps(state){
    const { weight, height, smokes, drinks } = state;
    return {
        weight,
        height, 
        smokes, 
        drinks
    }
}


export default connect(mapStateToProps, { updateDrinksType, updateSmokesType, updateHeightType, updateWeightType } ) (LifeStyle); 


