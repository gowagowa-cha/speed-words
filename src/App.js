import React from 'react';
import { Result } from './components/Result';
import { Typing } from './components/Typing';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className='App'>
      <div class='common-rect'>
        {/* <Welcome /> */}
        <Result />
      </div>
    </div>
  );
}

export default App;
