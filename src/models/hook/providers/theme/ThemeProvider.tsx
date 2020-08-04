import React, { createContext, useContext, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../..';
import { initialState } from '../../../saga/reducers/theme';

interface dataTypes {
  hotIssue?: any | [];
  news?: any | [];
  commingSoon?: any | [];
}
type ThemeParams = [{ data: dataTypes | null }];

const ThemeContext = createContext<ThemeParams>([
  {
    data: initialState,
  },
]);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const {
    hotIssue,
    news,
    commingSoon,
    hotIssue_error,
    news_error,
    commingSoon_error,
  } = useSelector((state: RootState) => ({
    hotIssue: state.theme.hotIssue.data,
    news: state.theme.news.data,
    commingSoon: state.theme.commingSoon.data,
    hotIssue_error: state.theme.hotIssue.error,
    news_error: state.theme.news.error,
    commingSoon_error: state.theme.commingSoon.error,
  }));

  console.log('data', hotIssue, news, commingSoon);
  // JWT token expired or any API-level errors, you can use redirects here
  if (hotIssue_error) {
    console.log('hotIssue_error error');
  }
  if (news_error) {
    console.log('news_error error');
  }
  if (commingSoon_error) {
    console.log('commingSoon_error error');
  }

  return (
    <ThemeContext.Provider value={[{ data: { hotIssue, news, commingSoon } }]}>
      {children}
    </ThemeContext.Provider>
  );
};

// Returns authentication-related data and functions
const useTheme = (): ThemeParams => useContext(ThemeContext);

export { ThemeProvider, useTheme };
