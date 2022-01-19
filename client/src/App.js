import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" default/>
      </Router>
    </div>
  );
}
export default App;



