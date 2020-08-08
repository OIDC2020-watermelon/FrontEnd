import React, { useEffect } from 'react';

export default function LoginPage() {
  const GetProfile = () => {
    window.location.href.includes('access_token') && GetUser();

    function GetUser() {
      const location = window.location.href.split('=')[1];
      const loca = location.split('&')[0];
      console.log('loca', loca);

      return fetch('http://27.96.135.244:8080/auth/signin/naver', {
        method: 'POST',
        body: JSON.stringify({ provider: 'naver', accessToken: loca }),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('wtw-token', res.token);
          // setData(res.user);
          return res;
        });
    }
  };
  useEffect(() => {
    const result = GetProfile();
    console.log('result', result);
  }, []);
  return (
    <>
      <div>콜백 요청 대기중</div>
      <button type="submit">클릭</button>
    </>
  );
}
