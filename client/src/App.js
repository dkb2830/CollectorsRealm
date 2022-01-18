import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}
export default App;



