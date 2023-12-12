import style from "./tvDetailModules.css"
import { useParams } from "react-router-dom"
import  axios  from "axios";
import { useState } from "react";
import { useEffect } from "react";
//상세 페이지



export const TvDetail = () => {
    const [tv,setTv] = useState([]);
    const {id} = useParams();
    console.log(id)
    {
    useEffect(() => {
        {tv &&
        axios.get("/data/tv.json").then((data) => {
            setTv(data.data.tv.find((product) => product.id === parseInt(id)))
            console.log(1)
        
        })
    }
      },[]);
    }
    //오른쪽 화면은 다른 컴포넌트 인거 아님?
      console.log(tv)
    return (
        <div id="main">
            <section className="productSection">
                <div className="productImageDiv">
                    <img id="${tv.id}" src="../images/image001.png" alt="product" />
                    <div className="productInfoDiv">
                        <p className="name">이름</p>
                        <div className="serialNcompar">
                            <div>
                                <p className="serialNumber">제품번호</p>
                                <p className="comparsion">+비교하기</p>
                            </div>
                            <div>
                                <p className="star">☆☆☆☆☆</p>
                                <p className="write">상품평쓰기</p>
                            </div>
                            <div>
                                <p>기준가</p>
                                <p className="detailPrice">가격</p>
                            </div>
                            <div>
                                <p>회원가</p>
                                <p className="detailPrice">가격</p>
                            </div>
                            <div>
                                <p>혜택가</p>
                                <p className="detailPrice">가격</p>
                            </div>
                        <p>색상</p>
                        <p>색상</p>
                        <p>색상</p>
                        <p>수량</p>
                        <p>수량</p>
                        <p>삼성카드10%</p>
                        <p>배송예정일</p>
                        <p>적립예정</p>
                        <p>혜택가</p>
                        <button>장바구니</button>
                        <button>구매하기</button>
                        </div>
                    </div>
                </div>
                
            

            </section>


        </div>

    )


}