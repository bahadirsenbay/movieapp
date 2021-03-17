import React from 'react';
import '../css/NavBar.css';

const PeopleCredits = ({name, realese, picture}) => {
    return (
        <div className="creditsCard">
            <div className="creditsPic">{ picture === null ? <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" height="100%" width="100%" /> : 
            <img src={`https://www.themoviedb.org/t/p/w1280/${picture}`} height="100%" width="100%" alt="altalta" />}</div>
            <div className="creditsText">
                <h3>{name?.substr(0,35)}</h3>
                <p>{realese}</p>
            </div>
        </div>
    )
}

export default PeopleCredits;