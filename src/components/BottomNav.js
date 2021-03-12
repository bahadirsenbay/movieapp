import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
  },
  
});

const BottomNav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon style={{color:"#0a1725"}} />} />
          <BottomNavigationAction component={Link} to="/Movielist" label="Movie" icon={<TheatersIcon style={{color:"#0a1725"}} />} />
          <BottomNavigationAction component={Link} to="/TVshow" label="Series" icon={<MovieIcon style={{color:"#0a1725"}} />} />
          <BottomNavigationAction component={Link} to="/people" label="People" icon={<PeopleIcon style={{color:"#0a1725"}} />} />
        </BottomNavigation>
      );
}

export default BottomNav;