import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


const FormBody=styled.div`
width: 100%;
margin: 10%;
height: 100%;
`;



class Pictures extends Component {
  
  render() {
    return (
      
      <FormBody>
        <div className="input">
          <form>
          <div className="upload-photo-wrapper">
                <div className="box-lg a">
                <div className="num-list">1</div>
                </div>
                <div className="box-sm b">
                    <div className="num-list">2</div>
                </div>
                <div className="box-sm c">
                    <div className="num-list">3</div>
                </div>
                <div className="box-sm d">
                    <div className="num-list">4</div>
                </div>
                <div className="box-sm e">
                    <div className="num-list">5</div>
                </div>
                    
                <div className="box-sm f">
                    <div className="num-list">6</div>
                </div>
          </div>


    
              <div className="step__btn_container">
                <Link to="/page/3"><button className="drk-btn" style={{"background":`${this.props.color}`}} >Next Step</button></Link>
              </div>
          </form>
        </div>
        
        

        
        </FormBody>
      
    )
  }
}


export default Pictures

