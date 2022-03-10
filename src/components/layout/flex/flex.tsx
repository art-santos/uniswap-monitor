import React from 'react';
import { node } from 'prop-types';

import Box from '@material-ui/core/Box';

import { makeStyles, Typography } from '@material-ui/core';

const flexStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 'bold',
  },
}));

const FlexHeading = ({ heading, ...rest }) => {
  const classes = flexStyles();
  return (
    <Box className={classes.root} {...rest}>
      <Typography variant="h3" gutterBottom className={classes.heading}>
        {heading}
      </Typography>
    </Box>
  );
};

FlexHeading.propTypes = {
  heading: node.isRequired,
};

export default FlexHeading;
