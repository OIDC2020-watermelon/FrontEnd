import React, { createContext, useContext, ReactNode } from 'react';
import { logout } from './helper';
import { IUser } from '../../../../types/redux/entity/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../..';

type AuthContextParams = [{ data: IUser | null }, typeof logout];

const AuthContext = createContext<AuthContextParams>([{ data: null }, logout]);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data } = useSelector((state: RootState) => ({
    data: state.auth.auth.data,
    error: state.auth.auth.error,
  }));

  return (
    <AuthContext.Provider value={[{ data }, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth };
