import React from 'react';
import { Error, ErrorHandler } from '../../components';

const NotFound = () => {
  return <ErrorHandler component={Error} message="Page Not Found!" />;
};

export default NotFound;
