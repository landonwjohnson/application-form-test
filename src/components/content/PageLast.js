import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateGenderType, updateColorType} from '../../reducer';


const StyledPageLast = styled.div`
  background-color: white;
  border: 1px solid blue;
`;



class PageLast extends Component {
  
  render() {
    return (
      
      <StyledPageLast>
        <div>
        <h1>{this.props.gender}</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.phoneNumber}</h1>
            
       
        </div>
        
        

        
        </StyledPageLast>
      
    )
  }
}

function mapStateToProps(state){
  return {
      gender: state.gender,
      color: state.color,
      phoneNumber: state.phoneNumber,
      birthday: state.birthday
  };
}

export default connect(mapStateToProps) (PageLast); 


