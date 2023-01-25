import React from 'react'
import {Typography, AppBar, Grid, Toolbar, Container, TextField, Box,Divider,FormControl,
    Card, CardActions, CardContent, CardMedia, CssBaseline, } from '@material-ui/core'
import logo from './SmellyLogo.png'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    typography: {
      fontFamily: 'Manrope-SemiBold',
    },
  }));
const useStyles2 = makeStyles(() => ({
    typography: {
      fontFamily: 'Manrope-ExtraLight',
    },
  }));
const useStyles3 = makeStyles(() => ({
    typography: {
      fontFamily: 'Manrope-ExtraBold',
    },
  }));
const App=()=>{

    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 =useStyles3()
        return (
            <>
              <CssBaseline />
              <AppBar position="relative">
                <Toolbar>
                  <img src={logo} />
                  <Typography  className={classes.typography} color="white" align='right' gutterBottom>
                        Adopt Kittens
                </Typography>
                <Typography  className={classes.typography} color="white" align='right' gutterBottom>
                        Kitty Stories
                </Typography>
                <Typography  className={classes.typography} color="white" align='right' gutterBottom>
                        About
                </Typography>
                <Typography  className={classes.typography} color="white" align='right' gutterBottom>
                        About
                </Typography>
                <Typography className={classes.typography} color="white"  align='right' gutterBottom>
                        Contact
                </Typography>
                </Toolbar>
               
              </AppBar>
              <main>
                <div>
                  <div>
                      
                  </div>
                  <Container maxWidth="sm">
                    <Typography  class="label" color="textPrimary"  gutterBottom>
                        Contact us
                    </Typography>
                    <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                    </Typography>
                    <Typography variant="h4" className={classes3.typography} color="textPrimary" gutterBottom>
                    </Typography>
                    <Typography class="label">Your Full Name
                    <Box sx={{width: 357,height: 400}}>
                    <TextField   id="outlined-basic" label="Type your name" variant="outlined" fullWidth />
                    </Box>
                    <TextField
    sx={{
        width: 300
    }} variant="outlined" 
    InputProps={{ sx: { height: 1000 } }}
    placeholder="SX + InputProps"
/>
                    </Typography>
                   
                    <Typography class="label">Your Email
                        <TextField id="outlined-basic" label="Type your email" variant="outlined" />
                    </Typography>
                    <br/>
                    <Divider /><br/>
                  </Container>
                </div>
              </main>
            </>
          );
}

export default App;