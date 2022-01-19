import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Router>
        <Main path="/"/>
        <Detail path="/collectable/:id"/>
      </Router>
    </div>
  );
}
export default App;



