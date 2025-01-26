import React from 'react';
import './Movie.css'

const Search = (props) => {
    return (
        <div className='search_bar'>
            <input onChange={(ev) =>props.onTextChange(ev.target.value)} placeholder='Search Movie'/>
        </div>
    );
};

export default Search;