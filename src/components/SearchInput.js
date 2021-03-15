import React, { useEffect, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory, withRouter } from 'react-router-dom';

const SearchInput = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor:"white",
          borderRadius: "20px 20px 20px 20px"
        },

      }));

    const classes = useStyles();
    const [searchValue, setsearchValue] = useState("")
    const location = useLocation();
    let history = useHistory();


    useEffect(()=> {

    },[searchValue])
    
    const handleChange = (e) => {

        e.preventDefault();
        if(location.pathname === "/"){
            history.push({
                pathname: '/search',
                search: searchValue,
            })
        }
        
        if(location.pathname === "/search"){
            history.push({
                search: searchValue,
            })
        }
    }

    
    return (
        <div>
            <form onSubmit={handleChange}>
                <div className={classes.root}>
                    <div className="searchRowBody">
                    <Input id="standard-search"
                        placeholder="Film, dizi, kişi ara..."
                        type="search"
                        fullWidth="true"
                        disableUnderline="true"
                        onChange={(e) => setsearchValue(e.target.value)}
                        value={searchValue}
                        />
                    <Button onClick={handleChange} variant="contained" color="black" style={{ borderRadius: "0 20px 20px 0" }}>Search</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SearchInput);