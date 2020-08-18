import React from 'react';
import logo from '../../../../assets/images/logo.png';
import styled from 'styled-components';
import font from '../../../../lib/style/font';

export default function LogoComponent() {
  return (
    <>
      <S.LogoContainer
        onClick={() => {
          window.location.assign('/');
        }}
      >
        <img src={logo} alt="logo_image" width="60px" height="40px" />
        <S.LogoTextWrap>
          <S.LogoText>Water</S.LogoText>
          <S.LogoText>Melon</S.LogoText>
        </S.LogoTextWrap>
      </S.LogoContainer>
    </>
  );
}

const S: any = {};
S.LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
S.LogoText = styled.div`
  font-size: 1rem;
`;
S.LogoTextWrap = styled.div`
  margin-left: 0.5rem;
  font-weight: 700;
  line-height: 1rem;
  ${font.boldFont};
  display: flex;
  flex-direction: column;
`;
