import React from 'react';
import {Link} from 'react-router-dom';
//a 엘리먼트는 페이지 전체를 다시 그린다. 그래서 Link컴포넌트 사용
//state는 route props에 보내줄 데이터
import './Navigation.css';

function Navigation(){
    return (
        <div className="nav">
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */} 

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* <Link to="/">Home</Link>
            <Link to={{pathname:'/about', state: {fromNavigation: true}}}>About</Link> */}
        </div>
    )
}

export default Navigation;