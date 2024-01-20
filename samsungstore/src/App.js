import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './View/pages/home';
import { useState } from 'react';
import { ProductFr } from './View/products/productFr';
import { ProductTv } from './View/products/productTv';
import {JoinMemberShip} from './View/login/joinmembership';
import LoginPage from './View/pages/loginPage';
import Tv from './View/pages/tv';

function App() {
  const [tv, setTv] = useState([]);
  const [fr, setFr] = useState([]);
  return (

    <div>
      
      <Home tv = {tv} setTv = {setTv} fr = {fr} setFr = {setFr}/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route path="/productTv/:id" element={<Tv/>} />
          <Route path="/login/joinmembership" element={<LoginPage/>}/>
          <Route path="/login" element={<JoinMemberShip/>}/>
        </Routes>
    </div>
  );
}

export default App;
