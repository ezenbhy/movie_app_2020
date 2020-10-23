import React from 'react';
import PropTypes from 'prop-types';
/*
function Food(props){
  console.log(props);
  return <h1>I love {props.fav}</h1>
  // props객체 = {fav: "macaron", something: true, recipe: Array(6)} 생성
  // props.fav 객체.속성이름
}
*/
/*
function Food(props){
 const {fav} = props;
  return <h1>I love {fav}</h1>
  // 구조 분해 할당 1 - 객체에 있는 키값을 편하게 추출해주는 자바스트립트 문법
}
*/
/*
function Food({fav}){
   return <h1>I love {fav}</h1>
   // 구조 분해 할당 2
 }
*/
 //정리: 부모컴포넌트(App)에서 자식 컴포넌트(Food)에 props 즉 데이터를 전달하면 데이터가 하나의 객체로 변환되어 자식 컴포넌트의 인자로 전달됨. 

 // map() 사용법
/*
 function Food({name}){
  return <h1>I love {name}</h1>
}
*/
function Food({name, picture, rating}){
  return (
    <div>
      <h1>I love {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} />
    </div>
  ); 
}
//  서버에서 가져온 데이터를 저장하는 변수
//  const foodLike = [];
const foodILike = [
  {
    id: 1,
    name: 'macaron1',
    image: 'https://i.pinimg.com/236x/0f/5c/bf/0f5cbfd9cda0088d67a49cc444eb3291.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'macaron2',
    image: 'https://i.pinimg.com/236x/e5/42/ab/e542abbd9dd5d2163c0df0745d98fe2c.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'macaron3',
    image:
      'https://i.pinimg.com/236x/f0/77/8a/f0778a5ca729ddc1f485860b64343af6.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'macaron4',
    image: 'https://i.pinimg.com/236x/09/e0/4f/09e04fcdc66f73233463b6a9e8db2761.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'macaron5',
    image: 'https://i.pinimg.com/236x/8e/4c/68/8e4c6871e6b99ac8107617ee2bbde0b4.jpg',
    rating: 5,
  },
]; 

//  map()함수 - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환.
function App() {
  return (
  <div>
    <h1>Hello world!!</h1>
    {/* <Food fav="macaron1"/>
    <Food fav="macaron2" />
    <Food fav="macaron3" /> */}
    {/* JSX 주석 */}

    {/* {foodILike.map(dish => (
          <Food name={dish.name} />
        ))} */}

    {/* 설명:  
    foodILike.map(dish => 는 foodLike배열의 요소인 객체 하나 하나가 dish라는 매개변수에 들어가서 
    <Food name={dish.name} /> 는 Food 라는 자식 컴포넌트에 name이라는 props를 전달하고 
    {dish.name}은 전달된 props 자리에 객체.name값이 전달된다. */}

    {/* {foodILike.map(dish => (
          <Food name={dish.name} picture={dish.image} />
        ))} */}

    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      
    ))} 
    {/* 설명: key={dish.id}는 리액트 내부에서 컴포넌트가 서로 다르다는 것을 알려주는 방법이다. */}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
