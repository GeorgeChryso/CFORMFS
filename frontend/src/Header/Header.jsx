import {Typography,Box } from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';    
import Button from '@mui/material/Button';
import logo from './SmellyLogo.png'
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Pets from '@mui/icons-material/Pets';


let mainTheme=makeStyles((theme)=>({
    headerText: {
        'fontFamily': 'Manrope',
        'color':'#555555',
        "fontSize": 14,
        'letterSpacing': -0.5,
        'fontWeight':'bold',
        'lineSpacing': 22.5,
        'textTransform':'none',
         textAlign:'center'
      }
    })
  )





const Header=()=>{

    const [state, setState] = React.useState(false)

    const headerTheme=mainTheme()
    const toggleDrawer = (open) => (event) => {
      // Prevent from closing when the user is using the keyboard to navigate
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) 
          return;
        setState(open);
    };


    return (
        <AppBar position="relative"  style={{ boxShadow: '0px 2px #A0A9BA', background: '#FFFFFF' , height:'3.43%',padding: "0 8.33%"}} elevation={5}  >
            <Toolbar display="flex" sx={{alignContent:'center',display:'flex',justifyContent:'flex-end',flexWrap: 'wrap', flexDirection:{xs:'row',sm:'row'} }}>
                <img src={logo}  style={{ marginRight: 'auto',display:'block'}}/>
                <React.Fragment key={'top'}>
                    <IconButton onClick={toggleDrawer(true)} color="#555555" sx={{backgroundColor:'#fff',display:{md:'none',sm:'block'}}}><MenuIcon /></IconButton>
                    <Drawer anchor={'top'} open={state} onClose={toggleDrawer(false)}>
                        
                      <Box sx={{ width: 'auto' }}  role="presentation" onClick={toggleDrawer( false)} onKeyDown={toggleDrawer( false)}>
                        <List >
                          {['Adopt Kittens','Kitty Stories','About us','Blog','Contact'].map((text, index) => (
                            <ListItem key={text} disablePadding >
                              <ListItemButton>
                                <ListItemIcon>
                                  <Pets/>
                                </ListItemIcon>
                                <ListItemText primary={<Typography className={headerTheme.headerText}>{text}</Typography>} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Drawer>
                </React.Fragment>


                {['Adopt Kittens','Kitty Stories','About us','Blog','Contact'].map(s=>
                    <Button sx={{ minWidth: "fit-content",ml:'4%',display:{xs:'none',sm:'none',md:'flex'}}} variant="text">
                        <Typography  className={headerTheme.headerText} gutterBottom >{s}</Typography>
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}


export default Header