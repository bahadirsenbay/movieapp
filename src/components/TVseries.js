import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import InterMenu from './InterMenu';
import { useDispatch, useSelector } from 'react-redux';
import { leadTvActor, singleTV } from '../actions';
import LeadActor from './LeadActor'

import '../css/NavBar.css'
import NavBar from './NavBar';

const TVseries = (props) => {

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

    const tvID = props.match.params.id

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(singleTV(tvID))
        dispatch(leadTvActor(tvID))
    }, [])

    const classes = useStyles();
    const getTVseries = useSelector((state) => state.singleTV)
    const getLeadTvActor = useSelector((state) => state.leadTvActor)

    return (
        <div>
            <NavBar/>
            <InterMenu />
            <div className="mainInMovieBody" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${getTVseries?.backdrop_path})` }}>
                <div className="inMovieBody">
                    <div className="posterPath"><img src={`https://www.themoviedb.org/t/p/w1280/${getTVseries?.poster_path}`} height="100%" width="100%" /></div>
                    <div className="movieDescription">
                        <div className="movieTitle"><div className="titleAndDate"><h2>{getTVseries?.name}</h2><p>({getTVseries?.first_air_date?.substr(0, 4)})</p></div>
                            <div className="dateAndGenres">
                                {getTVseries?.genres.map((gen) => {
                                    return (
                                        <span style={{ marginRight: "7px" }} key={gen.id}>{gen.name},</span>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="movieScore">
                            <div className="moviePoint"><CircularProgressbar
                                value={getTVseries?.vote_average}
                                maxValue="10"
                                text={`${getTVseries?.vote_average}%`}
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
                            <p>{getTVseries?.overview}</p>
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

            </div>
            <div className="actorContainer">
            {
                getLeadTvActor?.map((actor) => {
                    return(
                        <LeadActor key={actor.id} name={actor.name} photo={actor.profile_path} role={actor.character} id={actor.id}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default TVseries;