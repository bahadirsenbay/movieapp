import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import BottomNav from './BottomNav'
import { isMobile } from 'react-device-detect';
import PeopleCredits from './PeopleCredits';
import { getPersonCredit, singlePerson } from '../actions';

import '../css/NavBar.css';

const InPerson = () => {
    const dispatch = useDispatch()

    const params = useParams()

    const personID = params.id

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(singlePerson(personID))
        dispatch(getPersonCredit(personID))
    },[])

    const singlePeople = useSelector((state) => state.people.singlePeople)
    const peopleCredit = useSelector((state) => state.people.personCredits)
    return (
        <div style={ isMobile ? {marginBottom:110} : null}>
            { !isMobile && <NavBar/> }
        <div className="inPersonAllBody">
            <div className="inPersonBody">
                <div className="picAndInfo">
                    <div className="personPicture"><img src={`https://www.themoviedb.org/t/p/w1280${singlePeople?.profile_path}`} height="100%" width="100%"/></div>
                    <div className="personInfo">
                        <div className="allInfo">
                            <h2>Kişisel Bilgi</h2>
                            <div className="textStyle">
                                <h3>Bilinen işi</h3>
                                <p>{singlePeople?.known_for_department}</p>
                                <h3>Bilinen Filmleri</h3>
                                <p>Oyunculuk</p>
                                <h3>Cinsiyet</h3>
                                <p>{singlePeople?.gender === 2 ? "Erkek" : "Kadın"}</p>
                                <h3>Doğum Günü</h3>
                                <p>{singlePeople?.birthday}</p>
                                <h3>Doğum Yeri</h3>
                                <p>{singlePeople?.place_of_birth}</p>
                                <h3 style={{marginBottom:"10px"}}>Ayrıca Şöyle Bilinir</h3>
                                <p>{singlePeople?.also_known_as.map((known) => {
                                    return(
                                        <p>{known}</p>
                                    )
                                })}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personBiography">
                    <div className="inAllBiography">
                        <h2>{singlePeople?.name}</h2>
                        <div className="inBiography">
                            <h3>Biyografi</h3>
                            <p>{singlePeople?.biography.length === 0 ? "Bu kişi hakkında biyografi bulunamadı" : singlePeople?.biography}</p>
                        </div>
                        <div className="creditsInfo"><h1>Oynadığı Filmler</h1></div>
                        <div className="creditsBody">
                            {
                                peopleCredit?.cast?.map((credit) => {
                                    return(
                                        <PeopleCredits name={credit?.original_title} realese={credit?.release_date} picture={credit?.poster_path}/>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
        { isMobile && <BottomNav/> }
        </div>
    )
}

export default InPerson;