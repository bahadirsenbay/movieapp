import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import NavBar from './NavBar';
import BottomNav from './BottomNav';
import { Grid, IconButton, Paper } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { useDispatch, useSelector } from 'react-redux';
import '../css/NavBar.css';
import { deleteFav } from '../actions';


const MyFavorites = () => {

    const dispatch = useDispatch();

    const addToFav = useSelector((state) => state.liked.likedMovie);


    const handleClick = (id) => {
        dispatch(deleteFav(id))
    }

    return (
        <div className="favoriteAllBody">
            { !isMobile && <NavBar/>}
            <h1>Favori Listem</h1>

            <div className="favoriteBody">
                {
                        addToFav.map((res, index) => {
                            return (
                                    <div className="favoriteCard">
                                        <div style={{position:"relative"}}>
                                        <div className="favoritePic"><img src={`https://www.themoviedb.org/t/p/w1280/${res?.poster_path}`} height="100%" width="100%"/></div>
                                        <div className="deleteButton">
                                            <IconButton onClick={()=> handleClick(res.id)} style={{color:"red"}}>
                                                <DeleteForeverRoundedIcon/>
                                            </IconButton>
                                        </div>
                                        </div>
                                        <div className="favoriteText">
                                            <h3>{res?.original_title?.substr(0,50) ?? res?.original_name?.substr(0,50)}</h3>
                                            <p>{res?.release_date ?? res?.first_air_date}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
            </div>
            { isMobile && <BottomNav/> }
        </div>
    )
}

export default MyFavorites;