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
        'fontFamily': 'Manrope',
        'color':'#000000',
        "fontSize": 40,
        'letterSpacing': -0.5,
        'textAlign': `left`,
        'fontWeight':900,
        'lineSpacing':48,
      }})
  )
  let menuTheme=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope-ExtraLight',
        'color':'#555555',
        "fontSize": 14,
        'letterSpacing': -0.5,
        'textAlign': `right`,
        'fontWeight':'bold',
        'lineSpacing': 22.5,
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

  let hq=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#000000',
        "fontSize": 24,
        'letterSpacing': -0.3,
        'textAlign': `right`,
        'fontWeight':'bold',
        'lineSpacing':27
      }})
  )
  let cinfo=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#000000',
        "fontSize": 18,
        'letterSpacing': -0.22,
        'textAlign': `right`,
        'fontWeight': `medium`,
        'lineSpacing':27
      }})
  )

  let opt=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#9784FF',
        "fontSize": 14,
        'letterSpacing': -0.17,
        'textAlign': `right`,
        'fontWeight': `medium`,
        'lineSpacing': 17
      }})
  )
  let placeholdertext=makeStyles(()=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#A0A9BA',
        "fontSize": 16,
        'letterSpacing': -0.23,
        'textAlign': `left`,
        'fontWeight': `medium`,
        'lineSpacing': 17, 
      }})
  )

  const alright = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  });

  const zStyles = makeStyles((theme) => ({
    input: {
        '&:-moz-placeholder': {
        color: '#A0A9BA',
        fontFamily: 'Manrope',
        fontSize: 100,
        letterSpacing: -0.23,
        textAlign: 'left',
        fontWeight: 'medium',
        lineSpacing: 17,
        // marginBottom: '500px !important',
      },
    },
  }));


  const mainLayout = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      minHeight: '100vh',
      justifyContent:'space-between'
    },
    main: {
      flex: '1',
    },
    footer: {
      flex: '1',
      //position:'absolute',
      marginBottom: 0
    },
  });

const App=()=>{

    const ml=mainLayout()
    const menu=menuTheme()
    const title=titleTheme()
    const catpersons=catPersons()
    const labels=myLabels()
    const headq=hq()
    const cont=cinfo()
    const optional=opt()
    const alignright=alright()
    const plctext=placeholdertext()
    const prpstyle=zStyles()
        return (
            <>
            <CssBaseline />
<div mainLayout={ml.root}>
{/* <Box sx={{ display: 'flex',flexDirection:'column' }}> */}
<Box sx={{height:'100vh'}}>
    

            <AppBar position="static"  style={{ background: '#FFFFFF' }}  >
                <Box sx={{mx: "120px",height:48}}>
                    <Toolbar >
                        <Grid container spacing={2}> 

                            <Grid item xs={4}>
                            <img src={logo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography  className={menu.typography} align='right' gutterBottom>
                                    Adopt Kittens
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography  className={menu.typography} align='right' gutterBottom>
                                    Kitty Stories
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography  className={menu.typography}  align='right' gutterBottom>
                                    About
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography  className={menu.typography}  align='right' gutterBottom>
                                    About
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                                <Typography className={menu.typography}  align='right' gutterBottom>
                                    Contact
                                </Typography>
                            </Grid>
                          
                        </Grid>
                    </Toolbar>
                </Box>
            </AppBar>



                        



    <Box  sx={{ minHeight: "80vh",mx:"120px" }} className={ml.main}>
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

                    <Grid item xs={9}  className={alignright.container} sx={{mt:'40px'}}>
                        <Box >
                            <TextField InputLabelProps={{className: plctext.typography,  style: { marginBottom: '50 !important' }}} InputProps={{style: { width:'357px',height: `40px`,backgroundColor:'#fff' }}}  id="outlined-basic" label="Type your name" variant="outlined" fullWidth />
                        </Box>
                    </Grid>

                    <Grid item xs={3} sx={{mt:'51px'}}>
                        <Typography className={labels.typography}>Your Email</Typography>
                    </Grid>

                    <Grid item xs={9}  className={alignright.container} sx={{mt:'40px'}}>
                        <Box >
                        <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{ style: { width:'357px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="Type your email" variant="outlined" fullWidth/>
                        </Box>
                    </Grid>




                    <Grid item xs={12}  sx={{mt:'52px'}}>
                        <Divider/>
                    </Grid>


                


                    <Grid item xs={6}  sx={{mt:'40px'}}>
                        <Typography className={labels.typography}>City</Typography>
                    </Grid>
                    <Grid item xs={6}  className={alignright.container} sx={{mt:'40px'}}>
                        <Typography className={labels.typography}>Postal Code</Typography>
                    </Grid>

                    <Grid item xs={6} sx={{mt:'8px'}}>
                        <Box>
                        <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{className:prpstyle.input, style: { width:'172px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullWidth />
                        </Box>
                    </Grid>
                    <Grid item xs={6}  className={alignright.container} sx={{mt:'8px'}}>
                        <Box sx={{width:122,height:40}}>
                            <TextField  InputLabelProps={{className: plctext.typography}}InputProps={{style: { width:'122px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. 54658" variant="outlined" fullWidth />
                        </Box>
                    </Grid>

                    <Grid item xs={12}  sx={{mt:'32px'}}>
                        <Typography className={labels.typography}>Address</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:'8px'}}>
                        <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{style: { width:'288px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullWidth />
                    </Grid>

                    
                    <Grid item xs={6}  sx={{mt:'32px'}}>
                        <Typography className={labels.typography}>Your Message</Typography>
                    </Grid>
                    <Grid item xs={6}  sx={{mt:'32px'}}>
                        <Typography className={optional.typography}>Optional</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:'8px'}}>
                        <Box sx={{width:`476px`,height:`168px`}}>
                            <TextField   InputLabelProps={{className: plctext.typography}} InputProps={{style: { borderRadius:'5px',width:'476px',height: `168px`,backgroundColor:'#fff'}}}  minRows={5} maxRows={5} id="outlined-multiline-flexible" label="Type your message" variant="outlined" fullWidth multiline />
                        </Box>
                        
                    </Grid>
                    




                    <Grid item xs={0.7} sx={{mt:'15px'}}>
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

                <Grid item  container xs={5.5}>
                    <Grid item   className={alignright.container}  xs={ 12}>
                        <Box   sx={{mt:'160px',width:"476px",height:"416px"}} bgcolor="#791010" fullWidth >
                        </Box>
                    </Grid>
                    <Grid item xs={ 12}>
                        <Box>
                            <Typography className={headq.typography}>
                                Headquarters
                            </Typography >
                        </Box>
                        <Box>
                            <Typography className={cont.typography}>
                                Aristotelous 16, 54658 <br/>
                                Thessaloniki, Greece <br/><br/>
                                
                                +30 231 129 0998<br/>
                                hey@smellycat.gr
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>


            </Grid>

            
      

        </Box>

 
        {/* FOOTER */}
        
      
       
      
</Box>
<AppBar  position="relative"  style={{ bottom:0,background: '#000000' }} fullWidth>
                    <Toolbar >
                    <Box sx={{mx: "120px",height:150, mb:'0px',mt:'10px',flexDirection: 'column'}}>
                            <img src={logobottom}/>
                        </Box>            
                    </Toolbar>
                </AppBar> 


</div>
              
            </>
          );
}

export default App;