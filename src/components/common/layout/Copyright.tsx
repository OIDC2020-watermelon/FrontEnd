import React from 'react';

const Copyright = () => {
  return (
    <h6>
      {'Copyright © '}
      Your Website
      {new Date().getFullYear()}
      {'.'}
    </h6>
  );
};

export default Copyright;
