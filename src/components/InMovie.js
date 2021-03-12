import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import { isMobile } from 'react-device-detect';
import BottomNav from './BottomNav';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { singleMovie, leadActor } from '../actions';
import InterMenu from './InterMenu';
import '../css/NavBar.css';
import '../css/progress.css';

import LeadActor from './LeadActor';


const InMovie = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginLeft: "30px"
        },
        button: {
            backgroundColor: "#032541",
            marginRight: "10px",
            color: "#ffffff"
        }
    }));

    const movieID = props.match.params.id

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(singleMovie(movieID))
        dispatch(leadActor(movieID))
    }, [])

    const classes = useStyles();
    const getSingle = useSelector((state) => state.singleMovie)
    const getLeadActor = useSelector((state) => state.leadActor)
    return (
        <div>
            { !isMobile && 
            <NavBar/>
            }
            <div className="mainInMovieBody" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${getSingle?.backdrop_path})`, maxWidth:"100%", maxHeight:"100%"}}>
                <div className="inMovieBody">
                    <div className="posterPath"><img src={`https://www.themoviedb.org/t/p/w1280/${getSingle?.poster_path}`} /></div>
                    <div className="movieDescription">
                        <div className="movieTitle"><div className="titleAndDate"><h2>{getSingle?.title}</h2><p>({getSingle?.release_date.substr(0, 4)})</p></div>
                            <div className="dateAndGenres">
                                {getSingle?.genres.map((gen) => {
                                    return (
                                        <span style={{ marginRight: "7px" }} key={gen.id}>{gen.name},</span>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="movieScore">
                            <div className="moviePoint"><CircularProgressbar
                                value={getSingle?.vote_average}
                                maxValue="10"
                                text={`${getSingle?.vote_average}%`}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#081c22",
                                    textColor: "#fff",
                                    pathColor: "#21d07a",
                                    trailColor: "transparent"
                                })}
                            />
                            </div>
                            <p>Üye <br /> Puanları</p>
                            <div className={classes.root}>
                                <IconButton className={classes.button} color="primary" aria-label="add an alarm">
                                    <AlarmIcon />
                                </IconButton>
                                <IconButton className={classes.button} color="primary" aria-label="add an alarm">
                                    <AlarmIcon />
                                </IconButton>
                                <IconButton className={classes.button} color="primary" aria-label="add an alarm">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="movieSummary">
                            <h3>Özet</h3>
                            <p>{getSingle?.overview}</p>
                        </div>
                        <div className="movieAuthors">
                            <div className="author">
                                <p>Chris Columbus</p>
                                <p>Director</p>
                            </div>
                            <div className="author">
                                <p>Chris Columbus</p>
                                <p>Director</p>
                            </div>
                            <div className="author">
                                <p>Chris Columbus</p>
                                <p>Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                { isMobile && <BottomNav/> }
            </div>
            <div className="actorContainer">
                {
                    getLeadActor?.map((actor) => {
                        return (
                            <LeadActor key={actor.id} name={actor.name} photo={actor.profile_path} role={actor.character} id={actor.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InMovie;