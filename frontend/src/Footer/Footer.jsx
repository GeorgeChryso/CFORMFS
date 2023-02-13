import {Typography,Box } from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';    
import Button from '@mui/material/Button';
import React from 'react';
import logobottom from './logoBottom.png'
import discord from './discord.png'
import insta from './insta.png'
import tweet from './tweet.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';



let theme=makeStyles((theme)=>({
    footer:{
        'fontFamily': 'Manrope',
        'color':'#fff',
        "fontSize": 14,
        'letterSpacing': -0.17,
        'fontWeight':'medium',
        'lineSpacing': 22.5,
        'textTransform':'none',
        alignContent:'center',
        'textAlign':'center'
    },
    copyright:{
        'fontFamily': 'Manrope',
        'color':'#fff',
        "fontSize": 12,
        'letterSpacing': -0.15,
        'fontWeight':50,
        'lineSpacing': 22.5,
        'textTransform':'none',
    }
    })
  )



const Footer=()=>{
   
   const fTheme=theme()
   return (
        <AppBar position="relative"  sx={{background: '#000000' , padding: "0 8.33%", height:{ sm:'fit-content',md:'12.5vh'},display:'flex',alignContent:'center',flexGrow:1}}   >
            <Toolbar sx={{height:'100%'}} >
                <Grid container sx={{display:'flex',justifyContent: {sm:'center',md:'space-between'},flexWrap: 'wrap', flexDirection:{xs:'column',md:'row'} }} >
                    <Grid  item  xs={12}  md={3} sx={{display:'flex',justifyContent:{md:'flex-start',xs:'center'}}} >
                        <Button><img src={logobottom}  /></Button>
                    </Grid>
                    <Grid  container item   xs={12} md={6} sx={{display:'flex',justifyContent:'center', mx:'auto',my:'auto',flexDirection:{xs:'column',md:'row'}}}>
                        {['Privacy Policy','Terms & Conditions','Blog','Support'].map(s=>
                            <Button style={{marginLeft:'4%'}} variant="text">
                                <Typography  className={fTheme.footer} gutterBottom >{s}</Typography>
                            </Button>
                        )}
                    </Grid>
                    <Grid  item  xs={12} md={3} sx={{display:'flex',justifyContent:{md:'flex-end',xs:'center'}}} >
                        <Button><img src={discord} /></Button>
                        <Button><img src={tweet} /></Button>
                        <Button><img src={insta} style={{maxWidth: "fit-content"}} /></Button>
                    </Grid>
                </Grid>
            </Toolbar>
            <Box sx={{height:'32px',display:'flex',justifyContent:'center'}} >
                <Typography  className={fTheme.copyright} >Copyright © SmellyCat 2020</Typography>
            </Box>
        </AppBar>
    )
}


export default Footer