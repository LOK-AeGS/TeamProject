import React, { useState, useEffect, useRef } from "react";

export const SildeBanner = () => {
    const [image,setImage] = useState("./images/example1.png");
    const [imageIndex, setImageIndex] = useState(0); //0이면 example1 1이면 example2
    const [count,setCount] = useState(0); //setInterval과 changeImage를 실행을 시킬 방도가 없음 -> useEffect

    useEffect(() => {
        
            setInterval (() => {
                setCount(count + 1);
                console.log(count)
                if (count === 10){
                    if (imageIndex === 0){
                        setImage("./images/example2.png")
                        setImageIndex(1)
                    }
                    else if(imageIndex === 1){
                        setImage("./images/example3.png")
                        setImageIndex(2)
                        
                    }
                    else{
                        setImage("./images/example1.png")
                        setImageIndex(0)
                        
                    }
                    setCount(0)
                }if (count === 10){
                    if (imageIndex === 0){
                        setImage("./images/example2.png")
                        setImageIndex(1)
                    }
                    else if(imageIndex === 1){
                        setImage("./images/example3.png")
                        setImageIndex(2)
                        
                    }
                    else{
                        setImage("./images/example1.png")
                        setImageIndex(0)
                        
                    }
                    setCount(0)
                }
    },1000);
},[])
    return <div>
        <img src={image}/>
        </div>

}