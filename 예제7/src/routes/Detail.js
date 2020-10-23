import React from 'react';
import './Detail.css';
//Detail컴포넌트가 라우팅되면 자동으로 route props가 넘어옴.

// console탭 history에 출력된 값 중에서 push, go, goback, goforward 는 URL을 변경해 주는 함수,
// push()는 지정된 URL로 보내주는 함수, 생명주기함수 사용해서 컴포넌트가 마운트 될때 push()함수 실행
// 생명주기 함수를 사용하기 위해 클래스형 컴포넌트로 변경
// 실행순서 render() -> componentDidMount()


// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

class Detail extends React.Component {
    componentDidMount(){ //Detail컴포넌트가 마운트 되면
        const { location, history } = this.props; //구조 분해 할당으로 location, history 를 얻고
        if(location.state === undefined){
            history.push('/'); //홈으로 이동 즉 리다이렉트 기능이다.
        } 
    }

    render(){
        //return <span>hello</span>

        // const {location} = this.props;
        // return <span>{location.state.title}</span>

        const {location} = this.props;
        if(location.state){
            console.log(location.state);
            return ( //<span>{location.state.title}</span>
                <div className="detail">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                        <div className="detail__data">
                            <h3 className="detail__title" style={{backgroundColor:'#eee'}}>{location.state.title}</h3>
                            <h4 className="detail__year">{location.state.year}</h4>
                            <ul className="detail__genres">
                                {location.state.genres.map((genre , index) => { //  배열 원소의 인덱스가 자동으로 들어온다.이값으로 key props 사용
                                    return (
                                    <li key={index} className ="detail__genre">{genre}</li>
                                    );
                                })}
                            </ul>
                            <p className="detail__summary">{location.state.summary.slice(0,180)}...</p>
                        </div>
                </div>
                );            
        }else{
            return null;
        }
    }
}
export default Detail;