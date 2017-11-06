import React, { Component } from 'react';


class Filter extends Component {
  render() {
    return (
        <div>
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
                  <option> City </option>
              </select>
            <p>Display the average of results depending on filter preferences</p>
            
        </div>
    );
  }
}

export default Filter;