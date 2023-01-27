import React from 'react'
import {Typography, AppBar, Toolbar, Container, TextField, Paper,Item,Box,Divider,FormControl,
    Card, CardActions, CardContent, CardMedia, CssBaseline, } from '@material-ui/core'
    import { BottomNavigation } from '@material-ui/core';
    import { BottomNavigationAction } from '@mui/material';
    import Checkbox from '@mui/material/Checkbox';
    import Button from '@mui/material/Button';
import logo from './SmellyLogo.png'
import logobottom from './logoBottom.png'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import { createTheme ,ThemeProvider} from '@mui/material/styles';

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



  let btheme = createTheme({
    palette: {
      primary: {
        main: '#EF7878',   //button color
        contrastText: '#fff', // text color
      }
    }
  });

  let titleTheme=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope-ExtraBold',
        'color':'#000000',
        "fontSize": 40,
        'letterSpacing': -0.5,
        'textAlign': `left`,
        'fontWeight':'bold',
        'lineSpacing':48,
      }})
  )
  let catPersons=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope-SemiBold',
        'color':'#000000',
        "fontSize": 18,
        'letterSpacing': -0.22,
        'textAlign': `left`,
        'fontWeight':'bold',
        'lineSpacing':27,
        'lineHeight':`27px`

      }})
  )

  let myLabels=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope-SemiBold',
        'color':'#000000',
        "fontSize": 14,
        'letterSpacing': -0.17,
        'textAlign': `left`,
        'fontWeight':'bold',
        'lineSpacing':17
      }})
  )
const App=()=>{

    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 =useStyles3();

    const title=titleTheme()
    const catpersons=catPersons()
    const labels=myLabels()


        return (
            <>
            <CssBaseline />
<Box bgcolor="#EFF1F4" >
            <AppBar position="static"  style={{ background: '#FFFFFF' }}  >
                <Box sx={{mx: "120px"}}>
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



                        



    <Box  sx={{ minHeight: "80vh",mx:"120px" }}>
            <Grid container spacing={2}> 
                <Grid container item  xs={6.5}>{/*out of 12*/} 

                    <Grid item xs={12}>
                        <Box sx={{mt:'80px',width:'213px',height:'55px'}}>
                            <Typography  className={title.typography}  >
                                Contact us
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{mt:'24px'}}>
                        <Box sx={{width:'476px',height:'56px'}} >
                            <Typography className={catpersons.typography}  >
                            We are all cat persons, so if you got any question, drop it below and we will contact you back!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3}  sx={{mt:'51px'}}>
                        <Typography className={labels.typography}>Your Full Name</Typography>
                    </Grid>   

                    <Grid item xs={9} sx={{mt:'40px'}}>
                        <Box >
                            <TextField style={{width:357,height:40}}  id="outlined-basic" label="Type your name" variant="outlined" fullWidth />
                        </Box>
                    </Grid>

                    <Grid item xs={3} sx={{mt:'51px'}}>
                        <Typography className={labels.typography}>Your Email</Typography>
                    </Grid>

                    <Grid item xs={9} sx={{mt:'40px'}}>
                        <TextField  style={{width:357,height:40}} id="outlined-basic" label="Type your email" variant="outlined" fullWidth/>
                    </Grid>




                    <Grid item xs={12}  sx={{mt:'52px',mr:'12.85%'}}>
                        <Divider/>
                    </Grid>




                    <Grid item xs={6}  sx={{mt:'40px'}}>
                        <Typography className={labels.typography}>City</Typography>
                    </Grid>
                    <Grid item xs={6}  sx={{mt:'40px'}}>
                        <Typography className={labels.typography}>Postal Code</Typography>
                    </Grid>

                    <Grid item xs={6} sx={{mt:'8px'}}>
                            <TextField   style={{width:172,height:40}} id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6} sx={{mt:'8px'}}>
                        <Box bgcolor="#fff" sx={{width:122,height:40}}>
                            <TextField   style={{width:122,height:40}} id="outlined-basic" label="ex. 54658" variant="outlined" fullWidth />
                        </Box>
                    </Grid>

                    <Grid item xs={12}  sx={{mt:'32px'}}>
                        <Typography className={labels.typography}>Address</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:'8px'}}>
                        <TextField   style={{width:288,height:40}}id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullWidth />
                    </Grid>

                    
                    <Grid item xs={12}  sx={{mt:'32px'}}>
                        <Typography className={labels.typography}>Your Message</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:'8px'}}>
                        <Box sx={{width:`476px`,height:`168px`}}>
                            <TextField  sx={{width:`476px`,height:`168px`}}  minRows={5} id="outlined-multiline-flexible" label="Type your message" variant="outlined" fullWidth multiline />
                        </Box>
                    </Grid>
                    




                    <Grid item xs={0.7} sx={{mt:'17px'}}>
                        <Checkbox  />
                    </Grid>

                    <Grid item xs={11} sx={{mt:'26px'}}>
                        <Typography>
                        I agree with the Terms & Conditions
                        </Typography>   
                    </Grid>

                    {/* SUBMIT BUTTON */}
                    <Grid item xs={12} sx={{mt:'46px'}}>
                    <ThemeProvider theme={btheme}>
                        <Button   variant="contained" sx={{ textTransform: 'none',mb:"5%"}} style={{  width: 169,height: 48,  borderRadius:5 }}>
                            <Typography gutterBottom>
                                Send!
                            </Typography>
                        </Button>
                    </ThemeProvider>
                    </Grid>
                </Grid>

                <Grid item xs={5.5} bgcolor="#791010" >
                    <Box sx={{mt:'160px',width:"476px",height:"416px"}} bgcolor="#fff" >
                    </Box>
                </Grid>
            </Grid>

            
      


        </Box>

        {/* FOOTER */}
        
            

            {/* <Box  > */}
                <AppBar position="relative" color="black" style={{ background: '#000000' }}>
                    <Toolbar variant="contained">
                        <Box sx={{mx: "120px",height:'174px'}}>
                            <img src={logobottom}/>
                        </Box>            
                    </Toolbar>
                </AppBar>
            {/* </Box> */}

</Box>
            </>
          );
}

export default App;