import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';

interface withAuthProps {
  children: ReactNode;
}

const WithAuth = ({ children }: withAuthProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default WithAuth;
