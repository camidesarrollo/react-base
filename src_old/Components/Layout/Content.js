import React from 'react';

import bn from '../../utils/bemnames';

import { Grid } from '@mui/material';

const bem = bn.create('content');

const Content = ({ tag: Tag, className, ...restProps }) => {
  const classes = bem.b(className);

  return <Tag className={classes} {...restProps} />;
};

Content.defaultProps = {
  tag: Grid,
};

export default Content;
