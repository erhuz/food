import React from 'react';
import { Box, Heading, Header, Text } from 'grommet';
import { User as UserIcon, Next as NextIcon, Logout as LogoutIcon } from 'grommet-icons';

const Settings = (props) => {


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

  let settingsItems = [];

  const itemsData = [
    {name: 'Account', icon: <UserIcon />},
    {name: 'Account', icon: <UserIcon />},
    {name: 'Account', icon: <UserIcon />},
    {name: 'Account', icon: <UserIcon />},
    {name: 'Account', icon: <UserIcon />},
    {name: 'Account', icon: <UserIcon />},
    {name: 'Log out', icon: <LogoutIcon />},
  ]

  itemsData.forEach(({name, icon}) => {


    settingsItems.push(<Box
      round
      pad="large"
      justify="between"
      margin="medium"
      background="light-3"
      elevation="small"
      direction="row"
    >
      <Box direction="row">
        {icon}
        <Text margin={{"horizontal": "small"}}> {name} </Text>
      </Box>
      <NextIcon />
    </Box>);

  });

  return (
    <Box fill={true} animation={wrapperAnimation} style={wrapperStyles}>
      <Header background="brand" justify="center">
        <Heading level="2">Settings</Heading>
      </Header>
      <Box justify="start" pad="small">
        {settingsItems}
      </Box>
    </Box>
  );
}

export default Settings;