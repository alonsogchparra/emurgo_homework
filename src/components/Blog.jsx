import React, { Component } from 'react';
import styled from 'styled-components';
import {Container, SectionTitle} from '../css';

const BlogItems = styled.div`

  @media(max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

`;

const BlogItem = styled.div`

  @media(max-width: 1200px) {
    margin: 0 auto;
    width: 50%;

    .image_continer {
      margin: 0 auto;
    }

    p, h4 {
      text-align: center;
    }

  }

  width: 30%;

  .image_container {
    width: 100%;
    margin: 0 auto;
  }

  .image_container img {
    width: 100%;
    vertical-align: middle;
    text-align: center;
  }

  p {
    color: #8C8C8C;
    font-weight: 100;
  }

  h4 {
    font-weight: 500;
    line-height: 1.5;
  }

`;

const Subtitle = styled.div`

  @media(max-width: 1200px) {
    width: 70%;
  }

  width: 35%;
  margin: 0 auto;

  p {
    font-weight: 200;
    text-align: center;
    margin-bottom: 30px;
  }
`;

class Blog extends Component {
  render () {
    return (
      <div>
        <Container>
          <SectionTitle>
            Blog
          </SectionTitle>
          <Subtitle>
            <p>Check out below for our latest announcements, meetups, news stories and press releases</p>
          </Subtitle>
          <BlogItems>
            <BlogItem>
              <div className="image_container">
                <img src="../assets/Blog 1.jpg" alt="Blog one"/>
              </div>
              <div>
                <p>11 Nov 2019</p>
              </div>
                <h4>Metaps Plus and EMURGO Collaborate on Joint Launch of World’s First ADA CRYPTO CARD in South Korea</h4>
            </BlogItem>
            <BlogItem>
              <div className="image_container">
                <img src="../assets/Blog 2.jpg" alt="Blog two"/>
              </div>
              <div>
                <p>6 Nov 2019</p>
              </div>
                <h4>MRegarding our relationship with EMURGO HK Limited</h4>
            </BlogItem>
            <BlogItem>
              <div className="image_container">
                <img src="../assets/Blog 3.jpg" alt="Blog three"/>
              </div>
              <div>
                <p>16 Oct 2019</p>
              </div>
                <h4>EMURGO to Hold Blockchain Hackathon in Partnership with Tokyo University of Science</h4>
            </BlogItem>
          </BlogItems>
        </Container>
      </div>
    )
  }
}

export default Blog