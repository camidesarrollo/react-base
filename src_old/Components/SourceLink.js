import React from 'react';

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a target="_blank" rel="noopener noreferrer" {...props} /> //href={process.env.REACT_APP_SOURCE_URL}
  );
};

export default SourceLink;
