import React, { Component } from 'react';
import styled from 'styled-components';

const FilterCo = styled.div`
background-color: white;
border: 1px solid red;
`;

class Filter extends Component {
  render() {
    return (
        <FilterCo>
            <form>
              <h3>Filter Statistics By</h3>
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
            <p>Display the average of results depending on filter preferences</p>
            
        </FilterCo>
    );
  }
}

export default Filter;