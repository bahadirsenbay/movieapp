import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';
import img from '../img/logo.png'
import '../css/NavBar.css';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        position:"static",
        backgroundColor:"#032541"
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },

    
  }));

const NavBar = () => {

    const classes = useStyles();
    const [cookie, setCookie, removeCookie] = useCookies()

    return (
        <div>
        <AppBar className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link to="/"><img src={img} style={{ height: "30px", width: "70px" }}/></Link>
            </IconButton>
            <Typography style={{ flexGrow: 1 }}>
            <Button color="inherit"><Link to="/Movielist" style={{textDecoration:"none", color:"white"}}>Filmler</Link></Button>
            <Button color="inherit"><Link to="/Tvshow" style={{textDecoration:"none", color:"white"}}>Diziler</Link></Button>
            <Button color="inherit"><Link to="/People" style={{textDecoration:"none", color:"white"}}>Kişiler</Link></Button>
            </Typography>
            <Button color="inherit"><Link style={{textDecoration:"none", color:"white"}}>Giriş</Link></Button>
            <Button onClick={() => removeCookie('token')} color="inherit"><Link style={{textDecoration:"none", color:"white"}}>Çıkış</Link></Button>
            <IconButton>

                <Link to="/MyFavorite" style={{textDecoration:"none", color:"white"}}><AccountCircle/></Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;