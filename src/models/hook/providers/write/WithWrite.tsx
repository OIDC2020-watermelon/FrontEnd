import React, { ReactNode } from 'react';
import { WriteProvider } from './WriteProvider';

interface withWriteProps {
  children: ReactNode;
}

const WithWrite = ({ children }: withWriteProps) => {
  return <WriteProvider>{children}</WriteProvider>;
};

export default WithWrite;
