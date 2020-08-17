import React from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/images/OIDC.png';
export default function AdComponent() {
  return (
    <>
      <S.AdContainer>
        <img src={logo} alt="Advertising" width="100px" height="40px" />
      </S.AdContainer>
    </>
  );
}

const S: any = {};
S.AdContainer = styled.div``;
