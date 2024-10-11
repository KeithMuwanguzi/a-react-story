import React from 'react';

const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>
      <span className="alert-message">{message}</span>
    </div>
  );
};

export default Alert;
