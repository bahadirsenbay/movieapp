import React from 'react';
import '../css/Reset.css'
import '../css/NavBar.css'
import { Link } from 'react-router-dom';


const LeadActor = ({name, photo, role, id}) => {
    return(
            <div className="actorBody">
                <Link to={`/person/${id}`} style={{textDecoration:"none", color:"black"}}>
                <div className="actorPicture">{ photo === null ? <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" height="100%" width="100%" /> : <img src={`https://www.themoviedb.org/t/p/w1280${photo}`} height="100%" width="100%"/> }</div>
                <div className="actorBodyText">
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
                </Link>
            </div>
    )
}

export default LeadActor;