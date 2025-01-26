import React from 'react';

const LoadMore = (props) => {
    return (
        <div className='button'>
        <button onClick={props.onLoadMoreClick}>Load More</button>

        </div>
    );
};

export default LoadMore;