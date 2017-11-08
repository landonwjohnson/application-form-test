import React, { Component } from 'react';
import styled from 'styled-components';

const FilterCo = styled.div`
background-color: white;
border: 1px solid red;
`;

class Stats extends Component {
  render() {
    return (
        <FilterCo>
            <form>
              <h3>Filter Results By</h3>
              <select >
                  <option> Age </option>
              </select>
              <select>
                  <option> Gender </option>
              </select>
              <select>
                  <option> BMI </option>
              </select>
              <select>
                  <option> State </option>
              </select>
              <select>
                  <option> Education </option>
              </select>
              <button> FILTER </button>
            </form>
            <p>Infographic Stats change depending on filter preferences</p>
            
            <ul>
                <li>This form has been filled out "0" times</li>
                <li>Average Education</li>
                <li>Average BMI</li>
                <li>Average Height</li>
                <li>Average Weight</li>
                <li>Average Salary</li>

            </ul>
        </FilterCo>
    );
  }
}

export default Stats;