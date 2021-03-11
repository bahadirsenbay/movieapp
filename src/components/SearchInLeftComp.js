import { Box, Tabs, Tab, Typography, makeStyles } from '@material-ui/core';
import '../css/NavBar.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchMovie, getSearchPeople, getSearchTV } from '../actions';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput'

const SearchInLeftComp = ({ queryData }) => {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        //console.log(props)
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: 224,
            width: "20%"
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
        tabMar: {
            marginTop: -25
        },

    }));

    const classes = useStyles();
    const [searchSelectedTab, setsearchSelectedTab] = useState(0)

    const dispatch = useDispatch()

    const { filterMovies, filterSeries, filterPeople } = useSelector((state) => state)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getSearchMovie(queryData))
        dispatch(getSearchTV(queryData))
        dispatch(getSearchPeople(queryData))
    }, [queryData])


    const handleChange = (event, newValue) => {
        setsearchSelectedTab(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                className={classes.vertical}
                orientation="vertical"
                variant="scrollable"
                value={searchSelectedTab}
                onChange={handleChange}
                aria-label="Vertical tabs example"
            >
                <Tab label="Filmler" />
                <Tab label="Diziler" />
                <Tab label="Kişiler" />
            </Tabs>
            <TabPanel className={classes.tabMar} value={searchSelectedTab} index={0}>
                <div className="searchMovieAllBody">
                    {
                        filterMovies?.results?.length === 0 ? <p>Aradığınız sonuç bulunamadı..</p> : 
                        filterMovies?.results?.map((filter) => {
                            return (
                                <Link to={`/movie/${filter.id}`} style={{textDecoration:"none", color:"black"}}>
                                <div className="searchMovieBody" key={filter?.id}>
                                    <div className="searchMoviePicture">{filter.poster_path === null ? <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" height="100%" width="100%"/> : 
                                    <img src={`https://www.themoviedb.org/t/p/w1280/${filter?.poster_path}`} height="100%" width="100%" />}</div>
                                    <div className="searchMovieText">
                                        <h3>{filter?.title}</h3>
                                        <p>{filter?.release_date}</p>
                                        <span>{filter?.overview?.substr(0,199)}</span>
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </TabPanel>
            <TabPanel className={classes.tabMar} value={searchSelectedTab} index={1}>
                <div className="searchMovieAllBody">
                    {
                        filterSeries?.results?.length === 0 ? <p>Aradığınız sonuç bulunamadı..</p> :
                        filterSeries?.results?.map((filter) => {
                            return (
                                <Link to={`/series/${filter.id}`} style={{textDecoration:"none", color:"black"}}>

                                <div className="searchMovieBody" key={filter?.id}>
                                    <div className="searchMoviePicture">{filter.poster_path === null ? <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" height="100%" width="100%"/> : 
                                    <img src={`https://www.themoviedb.org/t/p/w1280/${filter?.poster_path}`} height="100%" width="100%" />}</div>
                                    <div className="searchMovieText">
                                        <h3>{filter?.name}</h3>
                                        <p>{filter?.first_air_date}</p>
                                        <span>{filter?.overview?.substr(0,199)}</span>
                                    </div>
                                </div>
                                </Link>

                            )
                        })
                    }
                </div>
            </TabPanel>
            <TabPanel className={classes.tabMar} value={searchSelectedTab} index={2}>
                <div className="searchPersonAllBody">
                    {
                        filterPeople?.results?.length === 0 ? <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}><p>Aradığınız sonuç bulunamadı</p></div> : 
                        filterPeople?.results?.map((person) => {
                            return (
                                <Link to={`/person/${person.id}`} style={{textDecoration:"none", color:"black"}}>
                                <div className="searchPersonBody">
                                    <div className="searchPersonPicture">{person.profile_path === null ? <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" height="100%" width="100%"/> : 
                                    <img src={`https://www.themoviedb.org/t/p/w1280/${person?.profile_path}`} height="100%" width="100%" />}</div>
                                    <div className="searchPersonText">
                                        <h3>{person?.name}</h3>
                                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> 
                                        <span style={{marginRight: "10px"}}>{person.known_for_department}:</span>                                      
                                        {   
                                            person.known_for?.map((known) => {
                                                return(
                                                   <div><p style={{marginRight: "10px"}}>{known.title}</p></div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </TabPanel>
        </div>
    )
}

export default SearchInLeftComp;