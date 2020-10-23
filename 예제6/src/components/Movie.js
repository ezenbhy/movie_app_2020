import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({id, title, year, summary, poster, genres}) { //id, title, year, summary, poster는 props다.
    return (
        <div className="movie">
            <Link to={{
                pathname: '/movie-detail',
                state: {year, title, summary, poster, genres},
            }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title" style={{backgroundColor:'#eee'}}>{title}</h3>
                    <h4 className="movie__year">{year}</h4>
                    <ul className="movie__genres">
                        {genres.map((genre , index) => { //  배열 원소의 인덱스가 자동으로 들어온다.이값으로 key props 사용
                            return (
                            <li key={index} className ="movie__genre">{genre}</li>
                            );
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = { 
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired, //arrayOf()은 문자열을 원소로 같는 배열
};

export default Movie;