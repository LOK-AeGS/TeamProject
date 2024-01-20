//상품 하나하나를 보여주는 화면.
//TV를 보여줄 화면
//냉장고에 대한 DB를 불러옴 + 보여줘야함
import { KindCheckBox } from "../main/body/kindCheckBox";
import styles from "./productTvModules.css";
import {Link} from "react-router-dom";
//이미지를 제외한 나머지 글자들은 한꺼번에 모아서 중앙정렬

export const ProductTv = ({tv}) =>{

    
        return (
        <div className = "container">
            <div className = "allSort"> 
            <Link to ={`/productTv/${tv.id}`}>
                    <div className="product_image">
                    <img src = {tv.image}/>
                    </div> 
                    </Link> 
                <p className = "name">{tv.name}</p>
                <p className = "sirealNumber">제품번호</p>
                <p className="price">{tv.price}</p>
                <p className ="point">적립예정포인트</p>
                <Link to = {`/productTv/${tv.id}`}>
                <button>구매하기</button>
                </Link>
                <ul className = "inform">
                <p>·컬러볼륨 100 %의 퀀텀 디스플레이 4K</p>
                <p>·인공지능으로 완성한 AI 퀀텀 사운드</p>
                <p>·삼성 TV로 완성되는 QLED 홈라이프</p>
                </ul>
            </div>
            
        </div>
        )
    


}
