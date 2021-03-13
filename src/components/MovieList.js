import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import { getAPI, getTV } from '../actions';
import Pagenation from './Pagenation';
import { Grid } from '@material-ui/core';
import BottomNav from './BottomNav';

const MovieList = (props) => {
    const dispatch = useDispatch()
    const passedMovieUrl = props.match.url;

    useEffect(() => {
            window.scrollTo(0, 0)
            dispatch(getAPI())
    }, [])


    const movies = useSelector((state) => state.movies)
    return (
        <div style={ isMobile ? {marginBottom:70} : null}>
            { !isMobile && <NavBar/> }
            
            <div>
                <div className="PopFilmText"><h1 style={ isMobile ? {display:"flex", justifyContent:"center", padding:"10px 0 0 0"} : null}>Popüler Filmler</h1></div>
                   <div className="movieBody">            
            {
                movies?.results?.map((movie) => {
                    return (
                        <div className="movieCard">
                            <Link to={`/movie/${movie?.id}`}>
                            <div className="picAndProgres">
                            <div className="cardPic"><img src={`https://www.themoviedb.org/t/p/w1280/${movie?.poster_path}`} height="100%" width="100%"/></div>
                            <div className="cardProgress">
                            <CircularProgressbar
                                value={movie?.vote_average}
                                maxValue="10"
                                text={`${movie?.vote_average}%`}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    textSize:"25",
                                    backgroundColor: "#081c22",
                                    textColor: "#fff",
                                    pathColor: "#21d07a",
                                    trailColor: "transparent"
                                })}
                            />
                            </div>
                            </div>
                            <div className="cardInText">
                                <h3>{movie?.original_title?.substr(0,50)}</h3>
                                <p>{movie?.release_date}</p>
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
               <Pagenation passedUrl={passedMovieUrl}/> 
            </Grid>
        
            { isMobile && <BottomNav/>}
        </div>

    )
}

export default MovieList;