import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import Posts from './Components/PostComponent/Posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Posts/>
        </header>
        
      </div>  
    </Provider>
  );
}

export default App;
