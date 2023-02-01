import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Typography,Box } from '@material-ui/core';

 let App=()=>{
  return(
      <React.Fragment>
      <CssBaseline />

        <Box style={{display: "flex",justifyContent: 'column' }}>

        
          <AppBar position="fixed" color="primary">
              <Toolbar>
                
              </Toolbar>
          </AppBar>
          <Box >
          <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>

                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>

                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>
                  <Typography variant="h1">
                   HEY
                  </Typography>

                  <Typography variant="h1">
                   HEY
                  </Typography>
          </Box>
       
          <AppBar position="fixed" color="secondary" sx={{top: 'auto', bottom: 0 }}>
              <Toolbar>
              
              </Toolbar>
          </AppBar>
        </Box>
    </React.Fragment>
  )
}

export default App