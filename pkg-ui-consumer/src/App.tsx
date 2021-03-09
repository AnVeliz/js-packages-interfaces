import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CreatePrimary from 'pkg-implementations-primary/build/MessageProcessorPrimary'
import CreateSecondary from 'pkg-implementations-secondary/build/MessageProcessorSecondary'

const primaryProcessor = CreatePrimary();
const secondaryProcessor = CreateSecondary();

function App() {
  const [someValue, setSomeValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <select value={someValue} onChange={(e: ChangeEvent<HTMLSelectElement>) => { 
          setSomeValue(e.currentTarget.value) 
        }}>
          <option value="opt1">Option1</option>
          <option value="opt2">Option2</option>
          <option value="opt3">Option3</option>
        </select>
        <p>
         {primaryProcessor.processMessage(someValue)}
        </p>
        <p>
         {secondaryProcessor.processMessage(someValue)}
        </p>
      </header>
    </div>
  );
}

export default App;
