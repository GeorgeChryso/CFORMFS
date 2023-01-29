import {Typography,TextField,Box,Divider } from '@material-ui/core'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';    

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import logo from './SmellyLogo.png'
import logobottom from './logoBottom.png'
import discord from './discord.png'
import insta from './insta.png'
import tweet from './tweet.png'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';



  let titleTheme=makeStyles( theme=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#000000',        
        'fontWeight':900,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            lineSpacing:0,
            letterSpacing:0,
            'fontSize':20
          },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            fontSize:40,
            'lineSpacing':48,
            'letterSpacing': -0.5,

          }
      }})
  )
  let menuTheme=makeStyles((theme)=>({
    typography: {
        'fontFamily': 'Manrope',
        'color':'#555555',
        "fontSize": 14,
        'letterSpacing': -0.5,
        'fontWeight':'bold',
        'lineSpacing': 22.5,
        'textTransform':'none'
      },
    footer:{
        'fontFamily': 'Manrope',
        'color':'#fff',
        "fontSize": 14,
        'letterSpacing': -0.17,
        'fontWeight':'medium',
        'lineSpacing': 22.5,
        'textTransform':'none'
    },
    copyright:{
        'fontFamily': 'Manrope',
        'color':'#fff',
        "fontSize": 12,
        'letterSpacing': -0.15,
        'fontWeight':50,
        'lineSpacing': 22.5,
        'textTransform':'none'
    }
    })
  )
  let catPersons=makeStyles((theme)=>({
    typography: {
        'fontFamily': 'Manrope-SemiBold',
        'color':'#000000',
        'letterSpacing': -0.22,
        'fontWeight':'bold',
        'lineSpacing':27,
        'lineHeight':`27px`,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize:10
          },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            fontSize:18
        }
      }})
  )

  let myLabels=makeStyles((theme)=>({
    typography: {
        'fontFamily': 'Manrope-SemiBold',
        'color':'#000000',
        'letterSpacing': -0.17,
        'fontWeight':'bold',
        'lineSpacing':17,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize:10
          },
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            fontSize:14
        }
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
        'textAlign':'center',
        'fontWeight': `medium`,
        'lineSpacing': 17, 
      },
    send:{
        'fontFamily': 'Manrope',
        'color':'#fff',
        "fontSize": 20,
        'letterSpacing': 0.28,
        'textAlign':'center',
        'fontWeight': `bold`,
        'lineSpacing': 24 
    }}))
    

  const alright = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection:'row'
    }
  });


  const mainLayout = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      minHeight: '100vh',
      justifyContent:'space-between',
      alignContent:'center'
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

        return (

<Box sx={{display:'flex',justifyContent: 'column',flexDirection:'column',flexWrap: 'wrap',background: '#000000',overflow: 'hidden',maxWidth: '100%'}} >


            {/* {HEADER} */}
            <AppBar position="relative"  style={{ boxShadow: '0px 2px #A0A9BA', background: '#FFFFFF' , height:'3.43%',padding: "0 8.33%"}} elevation={5}  >
                <Toolbar display="flex" sx={{alignContent:'center',display:'flex',justifyContent:'flex-end',flexWrap: 'wrap', flexDirection:{xs:'column',md:'row'} }}>
                    <img src={logo}  style={{ marginRight: 'auto'}}/>
                    {['Adopt Kittens','Kitty Stories','About us','Blog','Contact'].map(s=>
                        <Button style={{ minWidth: "fit-content",marginLeft:'4%'}} variant="text">
                            <Typography  className={menu.typography} gutterBottom >{s}</Typography>
                        </Button>
                    )}
                </Toolbar>
            </AppBar>

          

            {/* BODY */}
            <Box  sx={{ minHeight: "80vh",  padding: "0 8.33%",backgroundColor:'#EFF1F4',  flexDirection:{xs:'column',md:'row'}  }} className={ml.main}>
                <Grid container spacing={12}> 
                    {/* LEFT PART */}
                    <Grid container item   xs={12} sm={12} md={6} lg={6} xl={6}>{/*out of 12*/} 

                        <Grid item xs={12} sm={12} sx={{mt:'24px'}} >
                            <Typography  className={title.typography}  >
                                Contact us
                            </Typography>
                            
                        </Grid>
                        <Grid item sm={12} sx={{mt:'24px'}}>
                            <Typography className={catpersons.typography} >
                                We are all cat persons, so if you got any question, drop it below and we will contact you back!
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} className={alignright.container} sx={{mt:'51px'}}>
                            <Typography className={labels.typography}>Your Full Name</Typography>
                            <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{style: { width:'357px',height: `40px`,backgroundColor:'#fff' }}}  id="outlined-basic" label="Type your name" variant="outlined" fullwidth />
                        </Grid>   

                        

                        <Grid item xs={12}  sm={12} className={alignright.container} sx={{mt:'51px'}}>
                            <Typography className={labels.typography}>Your Email</Typography>
                            <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{ style: { width:'357px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="Type your email" variant="outlined" fullwidth/>
                        </Grid>


                        <Grid item xs={12}   sm={12} sx={{mt:'52px'}}>
                            <Divider />
                        </Grid>


                    

                        <Grid container className={alignright.container}>
                            <Grid item sm={12}  md={6}  sx={{mt:'40px'}}>
                                <Typography className={labels.typography}>City</Typography>
                                <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{style: { width:'172px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullwidth />
                            </Grid>
                            <Grid item sm={12}  md={6}   sx={{mt:'40px'}}>
                                <Typography className={labels.typography}>Postal Code</Typography>
                                <TextField  InputLabelProps={{className: plctext.typography}}InputProps={{style: { width:'122px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. 54658" variant="outlined" fullwidth />
                            </Grid>
                        </Grid>
                       
                            
                
                

                        <Grid item xs={12}  sx={{mt:'32px'}}>
                            <Typography className={labels.typography}>Address</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{mt:'8px'}}>
                            <TextField  InputLabelProps={{className: plctext.typography}} InputProps={{style: { width:'288px',height: `40px`,backgroundColor:'#fff' }}} id="outlined-basic" label="ex. Thessaloniki" variant="outlined" fullwidth />
                        </Grid>

                        
                        <Grid container xs={6}  sm={12} className={alignright.container} sx={{mt:'32px',display:''}}>
                            <Typography className={labels.typography}>Your Message</Typography>
                            <Typography className={optional.typography}>Optional</Typography>
                        </Grid>
                        
                        <Grid item xs={12} sx={{mt:'8px'}}>
                            <Box sx={{width:`476px`,height:`168px`}}>
                                <TextField   InputLabelProps={{className: plctext.typography}} InputProps={{style: { borderRadius:'5px',width:'476px',height: `168px`,backgroundColor:'#fff'}}}  minRows={5} maxRows={5} id="outlined-multiline-flexible" label="Type your message" variant="outlined" fullwidth multiline />
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
                            <Button   variant="contained" sx={{ textTransform: 'none',mb:"5%"}} style={{ background:'#EF7878' , width: 169,height: 48,  borderRadius:5 }}>
                                <Typography className={plctext.send}>
                                    Send!
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    
                    {/* RIGHT PART */}
                    <Grid item  container xs={12} sm={12} md={6}>
                        <Grid item  sx={{display:'flex',justifyContent:'flex-end'}} xs={ 12}>
                            <Box   sx={{mt:'160px',width:"476px",height:"416px",backgroundColor:'#791010'}}  >
                            </Box>
                        </Grid>
                        <Grid item xs={ 12}>
                            <Typography className={headq.typography}>
                                Headquarters
                            </Typography >
                            <Typography className={cont.typography}>
                                Aristotelous 16, 54658 <br/>Thessaloniki, Greece <br/><br/>+30 231 129 0998<br/>hey@smellycat.gr
                            </Typography>
                        </Grid>
                    </Grid>


                </Grid>
            </Box>

    
            {/* {FOOTER} */}
            <AppBar position="relative"  style={{ boxShadow: '0px 2px #A0A9BA', background: '#000000' , padding: "0 8.33%"}} elevation={5}  >
                <Toolbar sx={{height:'12.43rem',display:'flex',justifyContent:'center',flexWrap: 'wrap', flexDirection:{xs:'column',md:'row'} }}>
                    <Grid container sx={{display:'flex',justifyContent:'space-between',flexWrap: 'wrap', flexDirection:{xs:'column',md:'row'} }} >
                        <Grid  item  xs={12}  md={4} sx={{mr:'auto'}}>
                            <Button sx={{justifySelf:'flex-start'}}><img src={logobottom} /></Button>
                        </Grid>
                        <Grid  container item   xs={12} md={4} sx={{display:'flex',justifyContent:'center', mx:'auto',my:'auto',flexDirection:{xs:'column',md:'row'}}}>
                            {['Privacy Policy','Terms & Conditions','Blog','Support'].map(s=>
                                <Button style={{ minWidth: "fit-content",marginLeft:'4%'}} variant="text">
                                    <Typography  className={menu.footer} gutterBottom >{s}</Typography>
                                </Button>
                            )}
                        </Grid>
                        <Grid  item  xs={12} md={4} sx={{ml:'auto',display:'flex',justifyContent:'flex-end'}} >
                            <Button><img src={discord} /></Button>
                            <Button><img src={tweet} /></Button>
                            <Button><img src={insta} style={{maxWidth: "fit-content"}} /></Button>
                        </Grid>

                        <Grid  container item  xs={12} md={12} sx={{justifyContent:'center',mx:'auto'}}>
                            <Typography  className={menu.copyright} >'Copyright © SmellyCat 2020'</Typography>
                        </Grid>


                    </Grid>
                </Toolbar>
            </AppBar>
                    
                    
                    
</Box> 
            
          );
}






export default App;