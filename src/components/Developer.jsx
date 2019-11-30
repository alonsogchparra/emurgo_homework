import React, { Component } from 'react';
import styled from 'styled-components';

const DeveloperBackground = styled.div`

  @media(max-width: 900px) {
    height: 400px;
  }

  background-image: url('../assets/Developer.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #306d77;
  height: 600px;
  width: 100%;
`;

class Developer extends Component {
  render () {
    return (
      <div>
        <DeveloperBackground />
      </div>
    )
  }
}

export default Developer;