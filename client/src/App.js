import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Main path="/"/>
        <Detail path="/collectable/:id"/>
        <Update path="/collectable/edit/:id"/>
      </Router>
    </div>
  );
}
export default App;



