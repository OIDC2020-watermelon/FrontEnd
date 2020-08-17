import Cookies from 'js-cookie';
import { addMonths } from 'date-fns';
/**
 * Ideally server should send a cookie header
 */
const saveTokenInCookies = (token: string) => {
  console.log('token', token);
  Cookies.set('qid', token, {
    expires: addMonths(new Date(), 1), // Save for 1 month
  });
  console.log('document.cookie', Cookies.get('qid'));
};

export const removeTokenFromCookies = () => {
  Cookies.remove('qid');
};

export const getToken = (id: string) => {
  return Cookies.get(id);
};

/**
 * Log out user by removing token from cookies
 */
const logout = () => {
  removeTokenFromCookies();
  window.location.reload();
  // Here you can do some logout-related stuff like page reloading
};

export { logout, saveTokenInCookies };
