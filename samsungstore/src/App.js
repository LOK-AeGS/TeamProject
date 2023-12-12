import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'; 
import { useState } from 'react';
import { ProductFr } from './products/productFr';
import { ProductTv } from './products/productTv';
import {JoinMemberShip} from './login/joinmembership';
import LoginPage from './pages/loginPage';
import Tv from './pages/tv';

function App() {
  const [tv, setTv] = useState([]);
  const [fr, setFr] = useState([]);
  return (



    <div>
      
      <Home tv = {tv} setTv = {setTv} fr = {fr} setFr = {setFr}/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route path="/productTv/:id" element={<Tv/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/login/joinmembership" element={JoinMemberShip}/>
        </Routes>
    </div>
  );
}

export default App;
