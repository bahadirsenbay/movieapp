import React from 'react';
import Login from './components/Login'
import Home from './components/Home';
import MovieList from './components/MovieList';
import InMovie from './components/InMovie';
import TVseries from './components/TVseries';
import Series from './components/Series';
import SearchPage from './components/SearchPage';
import PeopleList from './components/PeopleList';
import InPerson from './components/InPerson';
import Cookie, { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

    const [cookie, setCookie, removeCookie] = useCookies()
    return (
        <BrowserRouter>
            {
                !cookie.token ? <Login /> :
                    <Switch>
                        <div className="App">
                            <Route exact path='/' component={Home} />
                            <Route path='/Movielist' component={MovieList} />
                            <Route path='/TVshow' component={Series} />
                            <Route path='/movie/:id' component={InMovie} />
                            <Route path='/series/:id' component={TVseries} />
                            <Route path='/person/:id' component={InPerson} />
                            <Route path="/people" component={PeopleList}/>
                            <Route path='/search' component={SearchPage} />
                        </div>
                    </Switch>
            }

        </BrowserRouter>
    );
}

export default App; 