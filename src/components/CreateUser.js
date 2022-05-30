import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";


import React from 'react'

const CreateUser = () => {
  return (
    <div>
        
<CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </div>
  )
}

export default CreateUser
