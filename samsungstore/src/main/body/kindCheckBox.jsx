import { useState, useEffect } from "react"
import { ProductCheckBox } from "./productCheckBox";
import { List } from "@mui/material";
import { Header } from "../header/header";
import style from "./kindOfCheckBoxModules.css";
import { CheckSearch } from "./body";

//whatKindOfProduct 로 오는 값에 따라 Tv를 보여줄지, 냉장고를 보여줄지 선택해야함.

export const KindCheckBox = ({CheckSearch, checkList, setCheckList}) => {
    const productNameList = ['0','1','2','3','4','5']
    const [checkItems,setCheckItems] = useState([])
    const checkItemHandler = (props, isChecked) => {
    if (isChecked) {
/*        checkItems.add(id) */
/*const result = checkItems.concat(props)
        setCheckItems(result)
        이렇게 작성을 하지 않고 setCheckItems(checkItems.concat(props))
        하면 오류가 남 이해는 안된다 ㅅㅄㅂ*/
        const result = checkItems.concat(props)
        setCheckItems(result)
        console.log(checkItems)
    } else if (!isChecked) {
        const result = checkItems.filter((n) => {return n!=props})
        const checkListResult = checkList.filter((product)=>{return product.id != parseInt(props)})
        setCheckList(checkListResult);
        setCheckItems(result)
        console.log(checkItems)
        
        }
    
    }

    {useEffect(() =>{
        
        {checkItems&&
            checkItems.map((id) => {
            console.log()
            CheckSearch(id)
            
        })
    
        console.log(checkItems)
    }
    },[checkItems]);}
    
    

    return ( 
        
        
        <div className="CheckBoxMain">
            
        <List className="checkSection">
            
            {productNameList?.map((product, index) => {
                return(
                    
                <ProductCheckBox key = {index} name = {product} checkItemHandler ={checkItemHandler}/>
                    
                )
            })}
        </List>
        
        </div>
        
    )
    

}
