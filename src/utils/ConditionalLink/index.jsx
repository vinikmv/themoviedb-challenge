import React from 'react';
import { Link } from 'react-router-dom';

const ConditionalLink = ({ children, to, isMovie }) => {
  return !!isMovie && to ? <Link to={to}>{children}</Link> : <>{children}</>;
};

export default ConditionalLink;
