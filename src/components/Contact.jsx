import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../css';

const ContactContainer = styled.div`
  display: flex;
  align-content: space-between;
`;

const ContactForm = styled.div`
  @media(max-width: 1200px) {
    width: 100%;
  }

  width: 50%;
  background-color: #f1f7fa;

  h3 {
    margin: 40px auto;
    text-align: center;
    font-weight: 200;
  }

  form {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  form input {
    padding: 20px;
    background: #f1f7fa;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #215F68;
  }

  form textarea {
    background: #F1F7FA;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #215F68;
  }

  form button {
    background-color: #F1F7FA;
    border: 1px solid #215F68;
    padding: 20px;
    width: 50%;
    margin: 50px auto;
  }

`;

const ContactImage = styled.div`

  @media(max-width: 1200px) {
    display: none;
  }

  width:50%;
  background-image: url('../assets/Contact us.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #306d77;
  height: 700px;

`;

class Contact extends Component {
  render () {
    return (
      <div>
        <SectionTitle>
          Contact Us
        </SectionTitle>
        <ContactContainer>
          <ContactForm>
            <h3>Ask us enything! We`ll get back to you within 24 - 48 hours</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
              <label htmlFor="message">How can I help you?</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
              <button>LEARN MORE</button>
            </form>
          </ContactForm>
          <ContactImage />
        </ContactContainer>
      </div>
    )
  }
}

export default Contact