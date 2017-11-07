import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateGenderType} from '../../reducer';


const StyledPage1 = styled.div`
  background-color: white;
  border: 1px solid blue;
`;



class Page1 extends Component {
  
  render() {
    const { updateGenderType } = this.props;
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

              <label> Birthday </label>
              <br/>
                  <input type="date" 
                    id="birthday"
                    value={this.state.birthday} 
                    onChange={this.handleInputChange} 
                    required
                  />
              <br/>
              <br/>

              <label> What's your favorite color? </label>
                  <select required>
                        <option></option>
                        <option value="Red" style={{"background-color":"red"}}>Red</option>
                        <option value="Blue" style={{"background-color":"blue"}}>Blue</option>
                        <option value="Green" style={{"background-color":"green"}}>Green</option>
                        <option value="Pink" style={{"background-color":"pink"}}>Pink</option>
                        <option value="Purple" style={{"background-color":"purple"}}>Purple</option>
                        <option value="Orange" style={{"background-color":"orange"}}>Orange</option>
                        <option value="Teal" style={{"background-color":"teal"}}>Teal</option>
                  </select>
                  <br/>
              <label> Highest Education </label>
              <select required>
                    <option></option>
                    <option value="Highschool">Highschool Diploma</option>
                    <option value="Associates">Associate’s Degree</option>
                    <option value="Bachelors">Bachelor's Degree</option>
                    <option value="Masters">Master's Degree</option>
                    
              </select>
              <br/>
                  <br/>
              <label>Height</label>
              <br/>
              <div><input type="number" max={8} min={0} />' <input type="number" max={9} min={0} /> "</div>
              <br/>
              <label>Weight</label>
              <br/>
              <div><input type="number" id="weight" max={300} min={0}/>lbs</div>
              <br/>
              <label>Where are you from?</label>
              <br/>
              <div>
                <label>Zip</label>
                <input type="text" />
                <label>State</label>
                <select>
                  <option>UT</option>
                </select>
                <label>City</label>
                <select>
                  <option>Provo</option>
                </select>
              </div>

              


              <div className="step__btn_container">
                <Link to="/page/2"><button className="drk-btn" >Next Step</button></Link>
              </div>
           
          </form>
        </div>
        
        

        
        </StyledPage1>
      
    )
  }
}

function mapStateToProps(state){
  const { genderType } = state;
  return {
      genderType
  };
}

export default connect(mapStateToProps, { updateGenderType } ) (Page1); 


