import React from 'react';
import { Box, Stack, Button, Heading, Header, Paragraph } from 'grommet';
import { Add as AddIcon } from 'grommet-icons';
import { useToasts } from 'react-toast-notifications';

const Food = (props) => {
  const { addToast } = useToasts();

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

  const cardBackground = {
    "color": "neutral-1",
    "dark": true,
    "opacity": 0.4,
    "position": "bottom",
    "image": "url(https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80)"
  }

  const innerCardStyles = {
    backgroundColor: 'rgba(34,34,34,0.75)',
  }

  let fakeMeals = [];

  for (let index = 0; index < 15; index++) {
    fakeMeals.push(
      <Stack anchor="top-right">
        <Box margin="medium" round={true} elevation="medium" background={cardBackground}>
          <Box pad="large" round={true} style={innerCardStyles}>
            <Heading margin="xsmall" level="4">Tacogratäng</Heading>
            <Paragraph>
              Lättlagad och god tacogratäng som serveras med picklad rödlök på toppen.
            </Paragraph>
          </Box>
        </Box>
        <Button
          primary
          icon={<AddIcon />}
          style={addButtonStyles}
          pad="xsmall"
          size="large"
          gap="medium"
          onClick={() => { addToast('Added a portion to the list!', {appearance: 'success', autoDismiss: 2000})}}
        />
      </Stack>
    );

  }

  return (
    <Box fill={true} animation={wrapperAnimation} round={true} style={wrapperStyles}>
      <Header background="brand" justify="center">
        <Heading level="2">What do you want to eat?</Heading>
      </Header>
      <Box justify="start" pad="small">
        {fakeMeals}
      </Box>
    </Box>
  );
}

export default Food;