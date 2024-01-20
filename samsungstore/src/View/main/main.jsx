import {Body} from "./body/body";
import { useEffect } from "react";
import axios from "axios";
import { Header } from "./header/header";
//메인 페이지로, 위에 TV, 냉장고를 선택할 수 있는 Header와
//Tv또는 냉장고를 보여주는 Body로 이루어저 있음.\


export const Main = ({tv, setTv, fr, setFr})=>{

    useEffect(() => {

        {fr &&
        axios.get( "/data/refr.json").then((data) => {
            console.log(data)
          setFr(data.data.refr)
        });
        }
        {tv &&
          axios.get( "/data/tv.json").then((data) => {
              console.log(data)
            setTv(data.data.tv)
          });
          }
      },[]);

      console.log(tv)

    return (<div>
      <Header/>
        <Body tv = {tv} setTv = {setTv} fr = {fr} setFr = {setFr}/>
    </div>);

};