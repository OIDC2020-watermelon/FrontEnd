import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';
import palette from '../../../../lib/style/palette';

const Copyright = () => {
  return (
    <S.StyledTypography>
      <Title level={4}>
        <Text>{'Copyright © '}</Text>
        <Link to="/">
          <Text>Your Website</Text>
        </Link>
        <Text>
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Text>
      </Title>
    </S.StyledTypography>
  );
};

const S: any = {};

S.StyledTypography = styled(Typography)`
  & span,
  a {
    color: ${palette.gray4};
  }
`;

export default Copyright;
