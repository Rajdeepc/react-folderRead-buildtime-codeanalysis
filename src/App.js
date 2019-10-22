import React from 'react';
import './App.css';
import AtomsList from './molecules/atomlist';

function App() {
  return (
    <div className="App">
      <div className="atomsList">
        <AtomsList/>
      </div>
      {/* <div>
        <FilesUnderEachAtom/>
      </div> */}
      
    </div>
  );
}

export default App;
