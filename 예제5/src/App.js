import React from 'react';
// import Home from './routes/Home'
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';

// router라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
// Route에는 2가지 props를 전달,URL을 위한 path props 와 URL에 맞는 컴포넌트를 불러주기 위한 component props


function App(){
  // return <Home />;
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
