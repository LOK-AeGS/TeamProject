import { useState } from "react";
import style from "./productCheckBoxModules.css";

export const ProductCheckBox = ({name, checkItemHandler}) => {

    const [checked, setChecked] = useState(false); // 체크 여부 판단

const checkHandled = ({target}) => {
  setChecked(!checked);
  checkItemHandler(target.name, target.checked);
  console.log(target.name)
}


    return (
    <div className="checkSection">
        <wrap>
        <input type ='checkbox' name = {name} onChange={(e) => checkHandled(e)}/>
        <label for = {name}>{name}</label>
    </wrap>
    </div>)
}


