import React from 'react';



class App extends React.Component {
  
  constructor(props) { //constructor()함수는 클래스형 컴포넌트가 생성할때 호출됨. render()함수보다 먼저 실행됨.
    super(props);
    console.log('hello');
  }
  // 리액트에서 마운드(Mount)로 분류하는 생명주기 함수. 실행 순서 constructor() ->  render() -> componentDidMount()
  componentDidMount() { //componentDidMount()함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수.
    console.log('component rendered');
  }

  // 리액트에서 업데이트(update)로 분류하는 생명주기 함수. 실행 순서 setState() -> render() -> componentDidUpdate()
  componentDidUpdate() { //componentDidUpdate() 함수는 화면이 업데이트되면(새로 그려지면) 실행된다.
    console.log('I just updated');
  }

  //// 리액트에서 컴포넌트가 죽을 때(unMount)로 분류하는 생명주기 함수. 
  componentWillUnmount() {
    console.log('Goodbye');
  }

  /* state : 동적 데이터, 변경될 가능성이 있는 데이터를 다룰때 사용, 클래스형 컴포넌트에서 사용하는 개념, 객체형 데이터
  리액트는 state가 변경되면 render()함수를 다시 실행하여 변경된 state를 화면에 출력함. 그런데 state를 직접 변경하는 경우에는 render()함수를 다시 실행하지 않는다. 그래서 리액트는 state를 직접 변경할수 없도록 함.
  setState()함수를 사용해서 state의 값을 변경해야 함.
  setState()함수가 동작하면 -> state가 새로운 값으로 바뀌고 -> 이이서 render()함수를 동작시켜 -> 화면을 업데이트 시킴
  setSatte()함수의 인자로 함수를 전달하면 성능 문제 없이 state를 업데이트 할 수 있음.
  리액트는 이전 state와 새로운 state를 비교하여 바뀐 데이터만 업데이트 한다.

  */
  state = {
    count: 0,
  }
  
  add = () => {
    // console.log('add');
    // this.setState({count:1});
    // this.setState({count: this.state.count + 1});
        this.setState(current => ({ //current에는 현재 state가 넘어온다.
          count: current.count + 1, //그 state의 count에 1을 더한다.
        }));
  };

  minus = () => {
   // console.log('minus');
   // this.setState({count:-1});
   // this.setState({count: this.state.count - 1});
      this.setState(current => ({
        count: current.count - 1,
      }));
  }

  render(){
    //console.log('render');
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1> 
      {/* this.state는 현재 클래스에서 선언된 state */}
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div> 
    );
  }
}

export default App;
