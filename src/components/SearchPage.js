import React, { useEffect } from 'react';
import SearchInput from './SearchInput'
import SearchInLeftComp from './SearchInLeftComp';
import '../css/NavBar.css'
import NavBar from './NavBar';

const SearchPage = (props) => {
    const queryData = props.location.search.substr(1,50)

    return(
        <div>
            <NavBar/>
            <div className="denemeCss">
            <SearchInput/>
            </div>
            <div className="SearchPageBody">
                <SearchInLeftComp queryData={queryData}/>
            </div>
        </div>
    )
}

export default SearchPage;