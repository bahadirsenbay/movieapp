import { Link } from 'react-router-dom'
import '../css/NavBar.css';
import NavBar from './NavBar';
import Pagenation from './Pagenation';
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../actions';

const PeopleList = (props) => {
    const dispatch = useDispatch();
    const passedMovieUrl = props.match.url;


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getPeople())
    }, [])

    const people = useSelector((state) => state.people);
    return (
        <div>
            <NavBar/>
            <div><div className="PopFilmText"><h1>Popüler Oyuncular</h1></div>
            <div className="movieBody">
                {
                    people?.results?.map((person) => {
                        return (
                            <div className="movieCard">
                                <Link to={`/person/${person.id}`}>
                                    <div className="picAndProgres">
                                        <div className="cardPic"><img src={`https://www.themoviedb.org/t/p/w1280/${person?.profile_path}`} height="100%" width="100%" /></div>
                                    </div>
                                    <div className="cardInText">
                                        <h3>{person?.name}</h3>
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
                <Pagenation passedUrl={passedMovieUrl} />
            </Grid>


        </div>
    )
}

export default PeopleList;