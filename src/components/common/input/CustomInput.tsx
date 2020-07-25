import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

interface CustomInputProps {
  [key: string]: any;
}
// prefix icon
export default function CustomInput({ ...props }: CustomInputProps) {
  return (
    <>
      <S.AntdInput {...props} />
    </>
  );
}

const S: any = {};

S.AntdInput = styled(Input)``;
