import React from 'react';
import Button from '@material-ui/core/Button';

export default function Element(props) {
  const content = {
    '01_button': 'Button',
    // eslint-disable-next-line react/prop-types
    ...props.content,
  };

  return (
    <Button borderRadius="15px" color="primary" variant="contained">
      {content['01_button']}
    </Button>
  );
}
