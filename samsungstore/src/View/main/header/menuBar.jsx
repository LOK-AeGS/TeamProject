import { useState} from "react";
import style from "./menuBarModules.css";
import { Button } from "@mui/material";

export const MenuBar = () =>{
  const menuLst = ["제품", "기획", "menu3", "menu4"];

  return (
    <nav className="nav">
      <ul className="navContainer">
        {menuLst.map((v, idx) => (
          <li          >
            <p key = {idx}>{v}</p>
          </li>
        ))}
      </ul>
      <div className="detailMenu">
        {menuLst.map((v, idx) => (
          <ul          >
            <li>{`메뉴${idx + 1}-${1}`}</li>
            <li>{`메뉴${idx + 1}-${2}`}</li>
            <li>{`메뉴${idx + 1}-${3}`}</li>
            <li>{`메뉴${idx + 1}-${4}`}</li>
          </ul>
        ))}
      </div>
    </nav>
  );
}