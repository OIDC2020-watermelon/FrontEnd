import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import palette from '../../../../lib/style/palette';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterHead>
          <Link to="/">
            <FooterMenu>WaterMelon</FooterMenu>
          </Link>
          <Link to="/">
            <FooterMenu>Privacy Policy</FooterMenu>
          </Link>
          <Link to="/">
            <FooterMenu>Bug Reports</FooterMenu>
          </Link>
          <MessengerIcon>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyle imageStyle="facebook">
                <i className="fas fa-comment" />
              </IconStyle>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyle imageStyle="github">
                <i className="fab fa-github-alt" />
              </IconStyle>
            </a>
          </MessengerIcon>
        </FooterHead>
        <FooterContent>
          <span>Contact Me</span>
          <ContactMe>
            <span>김화목</span>
            <span>이창권</span>
            <span>김용민</span>
            <span>정진리</span>
            <span>조혜형</span>
          </ContactMe>
          <Link to="/admin">
            <AdminLogin>Administrator login</AdminLogin>
          </Link>
        </FooterContent>
        <Copyright />
      </FooterWrap>
    </>
  );
};

export default Footer;

interface IconStyleProps {
  imageStyle: 'facebook' | 'github' | 'kakaotalk';
}

const FooterWrap = styled.div`
  max-width: 1130px;
  padding: 1.3rem 1rem;
  color: ${palette.gray5};
  height: 11rem;
  background: black;
  margin: 0 auto;
`;

const FooterHead = styled.div`
  height: 3rem;
  display: grid;
  grid-template-columns: 9rem 9rem 9rem 1fr 10rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${palette.gray5};
`;
const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  border-right: 2px solid ${palette.gray5};
  &:hover {
    color: ${palette.gray6};
  }
`;

const MessengerIcon = styled.div`
  width: 10rem;
  grid-column-end: -1;
  display: flex;
  justify-content: space-evenly;
`;

const IconStyle = styled.div<IconStyleProps>`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 100px;
  border: 1px solid ${palette.gray6};
  position: relative;
  & i,
  & img {
    color: ${palette.gray6};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    border: none;
    transition: all 0.2s;
    transform: translateY(-2px);
    background: ${(props) =>
      props.imageStyle === 'facebook'
        ? '#7289da'
        : props.imageStyle === 'github'
        ? palette.gray2
        : '	#ffce00'};
  }
  &:hover i,
  img {
    color: ${palette.gray8};
  }
` as FC<IconStyleProps>;

//--------------------------------------------------------------------------

const FooterContent = styled.div`
  margin-bottom: 1rem;
  padding: 1.5rem 0 0 1.5rem;
  position: relative;
  width: 100%;
  font-size: 0.7rem;
  display: grid;
  grid-template-columns: 5rem 15rem;
  grid-template-rows: 20px;
  & > span:first-child {
    align-self: center;
    border-right: 2px solid ${palette.gray5};
  }
  & div:nth-child(3) {
    font-size: 1rem;
    grid-row: 2;
    grid-column: 1 / 3;
    align-self: end;
  }
`;
const ContactMe = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
`;

const AdminLogin = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  font-size: 0.7rem;
  &:hover {
    color: ${palette.gray6};
    cursor: pointer;
  }
`;
