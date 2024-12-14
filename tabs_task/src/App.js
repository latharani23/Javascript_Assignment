import React from 'react';
import Tabs from './components/tabs';

function App() {
  return (
    <div className="App">
      <h1> Tabs Components Task </h1>
      <Routes>
    
        <Route paths = "/tabs" element = {<tabs/>}/>
      </Routes>
    </div>
  );
}

export default App;
