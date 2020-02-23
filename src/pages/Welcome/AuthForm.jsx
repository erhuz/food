import React from 'react';
import { Box, Button, Layer, Form, FormField, Heading, Grid } from 'grommet';
import { Login as LoginIcon, Sign, Close } from 'grommet-icons';


const AuthForm = (props) => {
  const [showLogin, setShowLogin] = React.useState();
  const [showRegister, setShowRegister] = React.useState();

  return (
    <>
      <Button
        primary
        icon={<LoginIcon />}
        label="Login"
        size="large"
        gap="medium"
        margin="small"
        onClick={() => setShowLogin(true)}
      />
      {showLogin && (
        <Layer
          responsive={false}
          margin="small"
          animate={true}
          full="horizontal"
          onEsc={() => setShowLogin(false)}
          onClickOutside={() => setShowLogin(false)}
        >

        <Grid
            rows={['xsmall']}
            columns={['flex', 'flex']}
            gap="small"
            areas={[
              { name: 'heading', start: [0, 0], end: [1, 0] },
              { name: 'close', start: [1, 0], end: [1, 0] },
            ]}
          >
            <Box gridArea="heading" margin="large">
              <Heading level="2">
                Login
              </Heading>
            </Box>
            <Box gridArea="close" margin="large">
              <Button icon={<Close />} alignSelf="end" onClick={() => setShowLogin(false)} />
            </Box>
          </Grid>
        <Box margin="large">
          <Form onSubmit={() => {props.setAuthenticated()}}>
            <FormField name="name" label="Name" />
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
        </Layer>
      )}

      <Button
        primary
        color="#FFCA58"
        icon={<Sign />}
        label="Register"
        size="large"
        gap="medium"
        margin="small"
        onClick={() => setShowRegister(true)}
      />
      {showRegister && (
        <Layer
          responsive={false}
          margin="small"
          animate={true}
          full="horizontal"
          onEsc={() => setShowRegister(false)}
          onClickOutside={() => setShowRegister(false)}
        >
          <Grid
            rows={['xsmall']}
            columns={['flex', 'flex']}
            gap="small"
            areas={[
              { name: 'heading', start: [0, 0], end: [1, 0] },
              { name: 'close', start: [1, 0], end: [1, 0] },
            ]}
          >
            <Box gridArea="heading" margin="large">
              <Heading level="2">
                Register
              </Heading>
            </Box>
            <Box gridArea="close" margin="large">
              <Button icon={<Close />} alignSelf="end" onClick={() => setShowRegister(false)} />
            </Box>
          </Grid>

          <Box margin="large" direction="row-responsive">
            <Box basis="auto" alignSelf="end" style={{float: 'right'}}>

            </Box>
            <Box basis="auto">

            </Box>
          </Box>
          <Box margin="large">

            <Form>
              <FormField name="name" label="Name" />
              <Button type="submit" primary label="Submit" />
            </Form>
          </Box>
        </Layer>
      )}
    </>
  );
}

export default AuthForm;