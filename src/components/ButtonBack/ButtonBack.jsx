import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBack = ({ linkTo }) => {
  return (
    <div>
      <Link to={linkTo}>Go Back</Link>
    </div>
  );
};

export default ButtonBack;
