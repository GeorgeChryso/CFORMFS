import React from 'react'
import {Typography, AppBar, Toolbar, Container, TextField, Item,Box,Divider,FormControl,
    Card, CardActions, CardContent, CardMedia, CssBaseline, } from '@material-ui/core'
    import { BottomNavigation } from '@material-ui/core';
    import { BottomNavigationAction } from '@mui/material';
    import Checkbox from '@mui/material/Checkbox';

import logo from './SmellyLogo.png'
import logobottom from './logoBottom.png'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({
    typography: {
      fontFamily: 'Manrope-SemiBold',
      color:'#555555',
      //fontSize: 14,
      htmlFontSize: 14,
      letterSpacing: '-0.17px',
      lineHeight: '22.5px',
      textAlign: `left`
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
            <AppBar position="relative"  style={{ background: '#FFFFFF' }}  >
                <Box sx={{mx: "8.33%"}}>
                    <Toolbar >
                        <img src={logo}/>
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
                </Box>
            </AppBar>
            
    <Box sx={{ minHeight: "100vh",mx:"8.33%" }}>
            <Grid container spacing={2}> 
                <Grid container item  xs={7}>{/*out of 12*/} 
                    <Typography  variant="h1" color="textPrimary"  gutterBottom>
                        Contact us
                    </Typography>
                    <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                    </Typography>
                    <Typography variant="h4" className={classes3.typography} color="textPrimary" gutterBottom>
                    </Typography>
                    <Grid item xs={6}>
                        <Typography class="label">
                            Your Full Name
                            {/* <Box sx={{width: 357,height: 400}}></Box> */}
                            {/* <TextField sx={{width: 300}} variant="outlined" InputProps={{ sx: { height: 1000 } }} placeholder="SX + InputProps"/> */}
                        </Typography>  
                    </Grid>   

                    <Grid item xs={6}>
                        <TextField   id="outlined-basic" label="Type your name" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography class="label">Your Email</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Type your email" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider/>
                        <Divider variant="middle" />

                    </Grid>
                        
                </Grid>
                <Grid item xs={5}>
                    <Container maxWidth="sm">
                        <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography>
                    </Container>
                </Grid>
            </Grid>



                  <Checkbox  />
                  <Typography>
                    I agree with the terms and conditions
                  </Typography>

                        <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography> <Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography><Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography><Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography><Typography variant="h4" className={classes2.typography}  color="textPrimary" gutterBottom>
                                        We are all cat persons, so if you got any questions, drop it below and we will contact you back!
                        </Typography>


        </Box>

        {/* FOOTER */}
        
            

            <Box sx={{mt: "auto"}} >
                <AppBar position="static" color="black" sx={{mt:"auto"}} style={{ background: '#000000' }}>
                    <Toolbar>
                        <Box sx={{mx: "8.33%",my:"6.21%"}}>
                            <img src={logobottom}/>
                        </Box>            
                    </Toolbar>
                </AppBar>
            </Box>


            </>
          );
}

export default App;