import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PacmanLoader from 'react-spinners/PacmanLoader'


function App() {
  const[loading, setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <PacmanLoader className='pacman'
        color={"yellow"}
        size={50}
        loading={loading}/>
         ):( 
      <>
      <Header />
      <Outlet />
      </>)}
    </div>
  );
}

export default App;
