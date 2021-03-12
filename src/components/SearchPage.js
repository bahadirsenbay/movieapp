import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import SearchInput from './SearchInput'
import SearchInLeftComp from './SearchInLeftComp';
import '../css/NavBar.css'
import BottomNav from './BottomNav';
import NavBar from './NavBar';

const SearchPage = (props) => {
    const queryData = props.location.search.substr(1,50)

    return(
        <div>
            { !isMobile && <NavBar/> }
            <div className="denemeCss">
            <SearchInput/>
            </div>
            <div className="SearchPageBody">
                <SearchInLeftComp queryData={queryData}/>
            </div>
            { isMobile && <BottomNav/> }
        </div>
    )
}

export default SearchPage;