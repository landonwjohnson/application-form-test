import React, { Component } from 'react';
import styled from 'styled-components';

const ToDoDiv = styled.div`

`;

class ToDo extends Component {
  render() {
    return (
        <ToDoDiv>
        
        <h3>Things to do </h3>
        <ul>
            <li>Automate State and City forms with zipcode</li>
            <li>combine gender, weight, height, and age to create BMI statistics on final landing page </li>
            <li>can't access form unless they are 18</li>
            <li>Be able to upload pictures</li>
            <li>Statistics page wil show how many times the application has been filled out</li>
            <li>Use Facebook Authorization to fill out Name, City, Education, Work, where they live, where they lived, and use facebook profile picture.</li>​
            <li>Have a point system, depending if they pass or not, they will be sorted into 4 different arrays.</li>
            <li>Get distance between user input and admin input</li>
        </ul>

            
        </ToDoDiv>
    );
  }
}

export default ToDo;


