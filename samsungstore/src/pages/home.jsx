import {Main} from "../main/main";
import { Body } from "../main/body/body";
import { Detail } from "../detail/tvDetail";
import { CssTest } from "../test/cssTest";
import { Login } from "../login/login";
import { JoinMemberShip } from "../login/joinmembership";
import { Header } from "../main/header/header";
import { MenuBar } from "../main/header/menuBar";
import { TvDetail } from "../detail/tvDetail";
import Tv from "./tv";
import { useState } from "react";
//메인 페이지
const Home = ({tv, setTv, fr, setFr}) => {
    //<Header/>
   // <Main tv = {tv} setTv = {setTv} fr = {fr} setFr = {setFr}/>
    //<Login/>
   // <JoinMemberShip/>
//        <Main tv = {tv} setTv = {setTv} fr = {fr} setFr = {setFr}/>

    
    return <div>
        <Login/>
        </div>
}



export default Home;