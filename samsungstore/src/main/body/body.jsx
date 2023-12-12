import { ProductTv } from "../../products/productTv.jsx";
import { ProductFr } from "../../products/productFr.jsx";
import styles from "./bodyModules.css"
import { KindCheckBox } from "./kindCheckBox.jsx";
import { ProductCheckBox } from "./productCheckBox.jsx";
import {EventBanner1} from'../../event/eventBanner1';
import { Where } from "../../event/where.jsx";
import { SildeBanner } from "../../event/slideBanner.jsx";
import axios from "axios";
import { useState,useEffect } from "react";
//메인페이지에서 TV와 냉장고가 보일 화면!


//체크박스에서 값 입력 받아서 가져오기

export const Body = ({tv, setTv, fr, setFr}) => {
    const [checkList, setCheckList] = useState([]); 
    //CheckSearch({})에서 {}를 삭제 했더니 실행이 된다!!
    function CheckSearch(id){
        console.log({id})
            tv.map((product) => {
                if (product.id === parseInt(id)){
                    const result = checkList.concat(product)
                    setCheckList(result)
                }
                
            })
            
        console.log(checkList)
        
        
    }
    
    
//<SildeBanner/>
    return <div className="body">
        
        <div className="chucheon">
        <p> 추천 제품 </p>
        {checkList.map((product)=>{
            return <p>{product.name}</p>
        })}
        </div>
        <div className="ListNTv">
        <div className="CheckBoxSection">
        <KindCheckBox CheckSearch = {CheckSearch} checkList={ checkList} setCheckList={ setCheckList}/>
        </div>
        {fr?.map((product,idx) => {
//            console.log(product)
            return (
            <div>

                <ProductFr key = {product.id} fr = {product}/>
            </div>)
        })}
        <div className = "tv">
        {tv?.map((product) => {
 //           console.log(product)
            return <ProductTv key = {product.id} tv = {product}/>
        })}
        </div>
        </div>
        

        
        
    </div>
    
}


