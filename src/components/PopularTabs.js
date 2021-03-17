import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/NavBar.css';
import '../css/progress.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAPI, getTV } from '../actions';
import { Link } from 'react-router-dom';

const PopularTabs = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            marginTop: "20px",
            marginLeft: "20px",

        },

        tab: {
            marginBottom: "20px",
        },

        tabPanelCss: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },

    }));

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const dispatch = useDispatch()

    const movies = useSelector((state) => state.movies.movies)
    const series = useSelector((state) => state.series.series)


    useEffect(() => {
        dispatch(getAPI())
        dispatch(getTV())
    }, [])


    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        if (selectedTab === 0) {
            dispatch(getAPI())
        }
        if (selectedTab === 1) {
            dispatch(getTV())

        }
    };

    return (
        <div className={classes.root}>
            <div className="tableBodyStyle">
                <p>Popüler Olanlar</p>
                <div>
                    <Tabs className={classes.tab} value={selectedTab} indicatorColor="primary" onChange={handleChange} >
                        <Tab label="Televizyonda" />
                        <Tab label="Kiralık" />
                        <Tab label="Sinemalarda" />
                    </Tabs>
                </div>
            </div>
            <TabPanel value={selectedTab} index={0}>
                <div className="cardTabBody">
                    {
                        movies?.results?.map((movie) => {
                            return (
                                <div className="tabBody" key={movie?.id}>
                                    <Link to={`/movie/${movie?.id}`} style={{textDecoration:"none", color:"black"}}>
                                    <div className="pictureAndProgress">
                                        <div className="tabPictures"><img src={`https://www.themoviedb.org/t/p/w1280/${movie?.poster_path}`} height="100%" width="100%" /></div>
                                        <div className="progressRegion">
                                            <CircularProgressbar
                                                value={movie?.vote_average}
                                                maxValue="10"
                                                text={`${movie?.vote_average}`}
                                                background
                                                backgroundPadding={6}
                                                styles={buildStyles({
                                                    backgroundColor: "#081c22",
                                                    textSize:"27",
                                                    textColor: "#fff",
                                                    pathColor: "#21d07a",
                                                    trailColor: "transparent"
                                                })}
                                            />
                                        </div>
                                    </div>
                                    </Link>
                                    <div className="tabTextBody">
                                        <h3>{movie?.original_title}</h3>
                                        <p>{movie?.release_date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                <div className="cardTabBody">
                    {
                        series?.results?.map((movie) => {
                            return (
                                <div className="tabBody" key={movie?.id}>
                                    <Link to={`/series/${movie.id}`}>
                                    <div className="pictureAndProgress">
                                        <div className="tabPictures"><img src={`https://www.themoviedb.org/t/p/w1280/${movie?.poster_path}`} height="100%" width="100%" /></div>
                                        <div className="progressRegion">
                                            <CircularProgressbar
                                                value={movie?.vote_average}
                                                maxValue="10"
                                                text={`${movie?.vote_average}`}
                                                background
                                                backgroundPadding={6}
                                                styles={buildStyles({
                                                    backgroundColor: "#081c22",
                                                    textSize:"27",
                                                    textColor: "#fff",
                                                    pathColor: "#21d07a",
                                                    trailColor: "transparent"
                                                })}
                                            />
                                        </div>
                                    </div>
                                    </Link>
                                    <div className="tabTextBody">
                                        <h3>{movie?.original_name}</h3>
                                        <p>{movie?.first_air_date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
}


export default PopularTabs;