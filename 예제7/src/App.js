import React from 'react';
// import Home from './routes/Home'
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

import Detail from './routes/Detail';

// router라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
// Route에는 2가지 props를 전달,URL을 위한 path props 와 URL에 맞는 컴포넌트를 불러주기 위한 component props
// Link, Route컴포넌트는 반드시 HashRouter안에 포함되어야 한다.

function App(){
  // return <Home />;
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />

      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
