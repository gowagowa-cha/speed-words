import React from 'react';
import { Typing } from './components/Typing';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className='App'>
      <div class='common-rect'>
        {/* <Welcome /> */}
        <Typing />
      </div>
    </div>
  );
}

export default App;
