import React, { createContext, useContext, ReactNode } from 'react';
import { logout } from './helper';
import { IUser } from '../../../types/redux/entity/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
type AuthContextParams = [{ data: IUser | null }, typeof logout];

const AuthContext = createContext<AuthContextParams>([{ data: null }, logout]);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const {data, loading, error} = useSelector((state : RootState) => ({
    data : state.auth.auth.data,
    loading : state.auth.auth.loading,
    error : state.auth.auth.error,
  }))

  // Usally you dont see this, because we have no "loading" state on SSR
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('auth data', data);
  // JWT token expired or any API-level errors, you can use redirects here
  if (error) {
    console.log('session error');
  }
  

  return (
    <AuthContext.Provider value={[{ data }, logout]}>
        {children}
    </AuthContext.Provider>
  );
};

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth };