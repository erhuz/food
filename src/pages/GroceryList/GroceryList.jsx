import React, { useState } from 'react';
import { Box, Heading, Header, List, Text, CheckBox } from 'grommet';

const GroceryList = (props) => {
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

  return (
    <Box fill={true} animation={wrapperAnimation} style={wrapperStyles}>
      <Header background="brand" justify="center">
        <Heading level="2">Grocery Checklist</Heading>
      </Header>
      <Box justify="start" pad="small">
        <Box
          direction="row"
          justify="between">
          <Heading level="3" margin="small">
            Amount
          </Heading>
          <Heading level="3" margin="small">
            Grocery
          </Heading>
          <Heading level="3" margin="small">
            In Cart
          </Heading>
        </Box>
        <List
          primaryKey="name"
          secondaryKey="amount"
          data={[
            { name: 'Carrot', amount: 2},
            { name: 'Poatatoes', amount: 4 },
            { name: 'Can of mayo', amount: 1 },
            { name: 'Pineapple', amount: 1 },
          ]}
        >
          {({name, amount}, index) => {
            // TODO: Make entire row clickable for checkbox toggle.

            return (
              <Box
                key={index}
                direction="row"
                justify="between"
                gap="large"
                size="xsmall"
                align="center"
              >
                <Text>{amount}</Text>
                <Text weight="thin">{name}</Text>
                <CheckBox />
              </Box>
            )
          }}
        </List>
      </Box>
    </Box>
  );
}

export default GroceryList;