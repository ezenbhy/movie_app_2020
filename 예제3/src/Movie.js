import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}) { //id, title, year, summary, poster는 props다.
    return <h1>{title}</h1>
}

Movie.propTypes = { 
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
};

export default Movie;