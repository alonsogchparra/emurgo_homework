import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';
import { Container, SectionTitle } from '../css';

const ContainerAboutNew = styled(Container)`
  padding-bottom: 60px;
  max-height: 2400px;
`;

const Right = styled.div`
  @media (min-width: 1200px) {
    /* margin: 130px 0 0 8%; */
  }
  @media (max-width: 1200px) {
    /* margin: 0 8px 0 8px;
    min-height: 280px; */
    margin: 0 auto;
    flex-direction: column
  }
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  @media (min-width: 1200px) {
    /* margin: 130px 50% 0 0; */
  }
  @media (max-width: 1200px) {
    /* margin: 0 8px 0 8px;
    min-height: 320px; */
    margin: 0 auto;
    flex-direction: column
  }
  display: flex;
  flex:0;
  align-items: center;
  justify-content: center;
`;

const Square = styled.div`
  width: 320px;
  height: 300px;
`;

const SquareImage = styled.img`
  height: 330px;
  width: 350px;
  margin: 0 150px;
`;

const SquareText = styled.div`

  @media(max-width: 1200) {
    margin: 0 auto;
    flex-direction: column
  }

  flex: 0;
`;

const SquareTextTitle = styled.div`
  height: 36px;
  width: 98px;
  color: #353535;
  font-family: Rubik;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 20px;
`;

const SquareTextText = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  line-height: 28px;
  height: 168px;
  width: 400px;
`;

class AboutNew extends Component {
  render() {

    const _AboutNew = ({intl: {formatMessage}}) => (
      <span>
        <ContainerAboutNew>
          <SectionTitle>
            About
          </SectionTitle>
          <Left>
            <SquareText>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.secure' })}</SquareTextTitle>
              <SquareTextText >
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.secure-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.secure-text' })}
              </SquareTextText>
            </SquareText>
            <square>
              <SquareImage src="./assets/icon_secure.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </square>
          </Left>
          <Right>
            <square>
              <SquareImage src="./assets/icon_fast.svg" alt="Yoroi - Fast Our innovation" />
            </square>
            <SquareText>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.fast' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.fast-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.fast-text' })}
              </SquareTextText>
            </SquareText>
          </Right>
          <Left>
            <SquareText>
              <SquareTextTitle>{formatMessage({ id: 'home.properties.simple' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.simple-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.simple-text' })}
              </SquareTextText>
            </SquareText>
            <square>
              <SquareImage src="./assets/icon_simple.svg" alt="Yoroi - Simple Our passion" />
            </square>
          </Left>
        </ContainerAboutNew>
      </span>
    );

    const AboutNew = inject('locale')(injectIntl(observer(_AboutNew)));

    return <AboutNew />
  }
}

export default AboutNew;