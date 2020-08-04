import React, { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

interface withAuthProps {
  children: ReactNode;
}

const WithAuth = ({ children }: withAuthProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default WithAuth;
