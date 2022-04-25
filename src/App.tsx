import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {RootState} from './store/store'


function App() {
  const userList = useSelector((state: RootState)=> state.userList)
  return (
    <div className="App">
      <h1>User List</h1>
    </div>
  );
}

export default App;
