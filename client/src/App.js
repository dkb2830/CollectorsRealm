import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div>
      <Router>
        <Main path="/"/>
        <Detail path="/collectable/:id"/>
        <Update path="/collectable/edit/:id"/>
      </Router>
    </div>
  );
}
export default App;



