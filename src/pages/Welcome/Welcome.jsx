import React from 'react';
import { Box, Main, Heading, Paragraph } from 'grommet';
import AuthForm from './AuthForm';

const Welcome = (props) => {

  const wrapperStyles = {
    background: 'linear-gradient(135deg,rgba(253,111,255,1) 0%,rgba(129,252,237,1) 50%,rgba(111,255,176,1) 100%)',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  }

  const overflowHiddenStyles = {
    overflow: 'hidden',
  }

  console.log(props);


  return (
    <Box style={wrapperStyles}>

      <Main style={overflowHiddenStyles} pad="large">
        <Box fill={true} justify="around" direction="column">
          <Box align="center" animation={{"type": "zoomIn", "delay": 0, "duration": 500, "size": "xlarge"}}>
            <Heading alignSelf="center">Grocery List</Heading>
            <Paragraph alignSelf="center">What should I buy at the grocery store?</Paragraph>
          </Box>

          <Box animation={{"type": "slideLeft", "delay": 250, "duration": 500, "size": "xlarge"}}>
            <AuthForm setAuthenticated={props.setAuthenticated} />
          </Box>
        </Box>
      </Main>
    </Box>
  );
}

export default Welcome;