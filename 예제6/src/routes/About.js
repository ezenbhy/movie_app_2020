import React from 'react';
import './About.css';

function About(props){
  console.log(props);
  //route props는 Route컴포넌트가 기본적으로 넘겨주는 props이다.여기에 데이터를 담아 보낼수 있다.
  return (
    <div className="about__container">
      <span>
        “A JavaScript library for building user interfaces”
      </span>
      <span>- React -</span>
    </div>
  );
}



export default About;
