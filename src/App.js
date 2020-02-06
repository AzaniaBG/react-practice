import React from 'react';
import './App.css';
import STORE from './Store'

function App() {
  return (
    <main className="App">   
        <header className="App-header">
          {props.children}
          <div className="App-list">
            <STORE>
              
            </STORE>
          </div>
        </header>     
    </main>
  )
}

export default App;
