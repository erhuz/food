import React from 'react';
import { Box, Stack, Button, Heading, Header } from 'grommet';
import { Add as AddIcon } from 'grommet-icons';

const Food = (props) => {

  console.log(props);

  const wrapperStyles = {
    background: 'repeating-linear-gradient(135deg,rgba(253,111,255,0.4) 0%,rgba(129,252,237,0.4) 55%,rgba(111,255,176,0.4) 100%)',
    minHeight: 'calc(100vh - 52px)',
  }

  const wrapperAnimation = {
    "type": "fadeIn",
    "delay": 0,
    "duration": 500,
    "size": "xsmall"
  }

  const addButtonStyles = {
    borderRadius: '50%'
  }

  const cardStyles = {
    border: '1px solid #999999',
    background: '#F2F2F2',
    borderRadius: 8,
  }

  let meals = [];

  for (let index = 0; index < 15; index++) {
    meals.push(
      <Stack anchor="top-right">
        <Box pad="large" margin="medium" elevation="small" style={cardStyles}>
          <Heading margin="xsmall" level="4">Tacogratäng</Heading>
        </Box>
        <Button
          primary
          icon={<AddIcon />}
          style={addButtonStyles}
          pad="xsmall"
          size="large"
          gap="medium"
        />
      </Stack>
    );

  }

  return (
    <Box fill={true} animation={wrapperAnimation} style={wrapperStyles}>
      <Header background="brand" justify="center">
        <Heading level="2">What do you want to eat?</Heading>
      </Header>
      <Box justify="start" pad="small">

        {meals}
      </Box>
    </Box>
  );
}

export default Food;