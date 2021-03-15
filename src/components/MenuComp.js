import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie'
import Menu from '@material-ui/core/Menu';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    showman: {
        display: "flex",
        flexDirection: "column"
    },

});

const MenuComp = () => {

    const classes = useStyles();
    const [cookie, setCookie, removeCookie] = useCookies()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div style={{display:"flex", flexDirection:"column", marginTop: -3}}>
                <div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <AddIcon style={{ color: "#0a1725" }} />
                    </IconButton>
                </div>
                <p style={{display:"flex", justifyContent:"center", marginTop:-14, opacity: 0.5, fontFamily:"system-ui", fontSize: 11}}>Menu</p>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}><Link to="/MyFavorite" style={{textDecoration:"none", color:"black"}}>Favori</Link></MenuItem>
                <MenuItem onClick={()=> removeCookie('token')}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default MenuComp;