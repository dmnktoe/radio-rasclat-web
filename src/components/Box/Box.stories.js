import React from 'react';

import Box from './Box';

const stories = {
  title: 'Layout'
};

export default stories;

export const Box1 = () => {
  return (
    <Box
      p={3}
      mb={[ 4, 5 ]}
      color="background"
      bg="primary">
      Cookies!
    </Box>
  );
};
