import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
 
  //axios는 네트워크를 사용함으로 느리다. 그래서 axios를 별도의 함수로 만들어서 자바스크립트에게 이 함수는 시간이 필요하고 (async) 즉 이 함수는 비동기 이다, axsio.get()의 실행 완료를 기다려 달라고(await) 알려줘야 함.
  getMovies = async () => { 
    //const movies = await  axios.get('https://yts.mx/api/v2/list_movies.json');
    //console.log(movies);
    //console.log(movies.data.data.movies); //.연산자로 객체에 접근
    const { // .연산자 적용 순서대로 구조 분해 할당을 적용함
      data: {
        data: {movies},
      },
    //} = await  axios.get('https://yts.mx/api/v2/list_movies.json');

    //console.log(movies);
    //this.setState({movies: movies}); // {state인 movies : 영화 데이터가 있는 변수 movies} -> {movies}로 축약 가능
    //this.setState({movies});

      } = await  axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); // ?sort_by=rating은 평점을 내림차순으로 보여줌 , ?quality=3D은 3D영화만 보여줌
    this.setState({movies, isLoading:false});

  };

  //App컴포넌트가 그려지면(render()함수가 실행되면) 호출되는 생명주기함수
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading : false }); //state가 변경되면 render()함수를 다시 실행하여 변경된 state를 화면에 출력함
    // },6000)

    //axios.get('https://yts.mx/api/v2/list_movies.json'); //axios로 API(영화 데이터)를 호출

    this.getMovies();
  }

  render(){
    //구조분해할당으로 this.state 객체안에 있는 isLoading 이라는 키값을 우선 얻으면 항상 this.state를 입력하지 않아도 됨.
    //const {isLoading} = this.state;
    //return  <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;

    const {isLoading, movies} = this.state;
    return  <div>{isLoading 
                  ? 'Loading...' 
                  : movies.map((movie) => {
                      console.log(movie);
                      return (
                        <Movie
                          key={movie.id}
                          id={movie.id}
                          year={movie.year}
                          title={movie.title}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}

                        />
                      );  //Movie 컴포넌트 출력    
                  })}
            </div>;
  }
}

export default App;
