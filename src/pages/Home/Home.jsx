import React from "react";
import { Box, Heading, Paragraph, Button } from "grommet";
import {Group as GroupIcon, UserAdd as UserAddIcon } from 'grommet-icons';

const Home = () => {

  const props_hasHousehold = false;
  const wrapperAnimation = {
    "type": "fadeIn",
    "delay": 0,
    "duration": 500,
    "size": "xsmall"
  }
  const wrapperStyles = {
    background: 'linear-gradient(135deg,rgba(253,111,255,0.4) 0%,rgba(129,252,237,0.4) 50%,rgba(111,255,176,0.4) 100%)',
    height: 'calc(100vh - 52px)',
  }

  if(props_hasHousehold) {
    return (
      <Box pad="medium">
        has household
      </Box>
    )
  } else {
    return (
      <Box style={wrapperStyles} animation={wrapperAnimation} direction="column" justify="around" pad="medium" fill={true}>
        <Box>
          <Heading textAlign="center" level="2">
            You're not part of a household.
          </Heading>
          <Paragraph textAlign="center">
            Would you like to join yours? Or maybe you'd like to create one.
          </Paragraph>
        </Box>
        <Box>
          <Button
            primary
            icon={<GroupIcon />}
            label="Join a Household"
            size="large"
            gap="medium"
            margin="small"
            onClick={() => {console.log('Wow! You joined a house hold!')}}
          />
          <Button
            primary
            color="#FFCA58"
            icon={<UserAddIcon />}
            label="Create a Household"
            size="large"
            gap="medium"
            margin="small"
            onClick={() => {console.log('Lmao, loner.');
            }}
          />
        </Box>
      </Box>
    );
  }
}

export default Home;