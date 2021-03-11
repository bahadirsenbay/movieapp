import React from 'react';
import NavBar from './NavBar'
import '../css/NavBar.css'
import SearchInput from './SearchInput'
import PopularTabs from './PopularTabs'

const Home = () => {
    
    return(
        <div>
            <NavBar/>
        <div className="searchBody" style={{ backgroundImage: " url(https://wallpaperaccess.com/full/288727.jpg)", backgroundPosition:"center"}}>
            <div className="searchTextBody">
                <h1>Hoşgeldiniz.</h1>
                <h3>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h3>
            </div>
            <div className="inputBody">
                <SearchInput/>
            </div>
        </div>
        <PopularTabs/>
        </div>
    )
}

export default Home;