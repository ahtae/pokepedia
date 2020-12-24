import React from 'react';
import { GoBackButton } from '..';
import './Styles.scss';

const ErrorHandler = (props) => {
  const Component = props.component;

  return (
    <div className="errorHandlerContainer">
      <Component {...props} />
      <GoBackButton />
    </div>
  );
};

export default ErrorHandler;
