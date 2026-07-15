import React, { useState } from 'react';
import Landing from './Component/Landing/landing';
import Birthday from './Component/Birthday/birthday';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="App">
      {!isOpened ? (
        <Landing onOpen={() => setIsOpened(true)} />
      ) : (
        <Birthday />
      )}
    </div>
  );
}

export default App;