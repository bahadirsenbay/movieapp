import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IconButton } from '@material-ui/core';
import AddToPhotosSharpIcon from '@material-ui/icons/AddToPhotosSharp';
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import { getAPI, getLikedMovie, getTV } from '../actions';
import Pagenation from './Pagenation';
import { Grid } from '@material-ui/core';
import NavBar from './NavBar';
import BottomNav from './BottomNav';

const Series = (props) => {
    const dispatch = useDispatch()
    const passedSeriesUrl = props.match.url;

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getTV())
    }, [])


    const handleClick = (seri) => {
        dispatch(getLikedMovie(seri))
    }
    
    const series = useSelector((state) => state.series.series)
    
    return (
        <div style={isMobile ? { marginBottom: 70 } : null}>
            { !isMobile && <NavBar />}
            <div><div className="PopFilmText"><h1 style={isMobile ? { display: "flex", justifyContent: "center", padding: "10px 0 0 0" } : null}>Popüler Diziler</h1></div>
                <div className="movieBody">
                    {
                        series?.results?.map((seri) => {
                            return (
                                <div className="movieCard">
                                    <div style={{ position: "absolute", zIndex: 1, left: 110 }}>
                                        <IconButton aria-controls="simple-menu" aria-haspopup="true"
                                            onClick={() => handleClick(seri)}>
                                            <AddToPhotosSharpIcon style={{ color: "green" }} />
                                        </IconButton>
                                    </div>
                                    <Link to={`/series/${seri?.id}`}>
                                        <div className="picAndProgres">
                                            <div className="cardPic"><img src={`https://www.themoviedb.org/t/p/w1280/${seri?.poster_path}`} height="100%" width="100%" /></div>
                                            <div className="cardProgress">
                                                <CircularProgressbar
                                                    value={seri?.vote_average}
                                                    maxValue="10"
                                                    text={`${seri?.vote_average}%`}
                                                    background
                                                    backgroundPadding={6}
                                                    styles={buildStyles({
                                                        textSize: "25",
                                                        backgroundColor: "#081c22",
                                                        textColor: "#fff",
                                                        pathColor: "#21d07a",
                                                        trailColor: "transparent"
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="cardInText">
                                            <h3>{seri?.original_name?.substr(0, 50)}</h3>
                                            <p>{seri?.first_air_date}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Pagenation passedUrl={passedSeriesUrl} />
            </Grid>
            {
                isMobile && <BottomNav />
            }

        </div>

    )
}

export default Series;