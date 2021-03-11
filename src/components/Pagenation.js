import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, getPeople, getTV } from '../actions';

const Pagenation = (props) => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAPI())
        dispatch(getTV())
        dispatch(getPeople())
    },[])

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(getAPI(value))
        dispatch(getTV(value))
        dispatch(getPeople(value))
      };

    const {movies, series, people} = useSelector((state) => state)

    return (
        <div>
          <Pagination count={movies.total_pages} page={page} onChange={handleChange} color="secondary" />  
        </div>
    )
}

export default Pagenation;