import { MenuBar } from "./menuBar";
import { JoinMemberShip } from "../../login/joinmembership";
import style from "./headerModules.css";
import { Link } from "react-router-dom";
//메뉴 바 만들기
export const Header = () => {
   
    return <div className="menubar">
        <div className="withMenu">
            <div className="logo">
                <Link to="/"><img src="./images/samsung.png" /></Link>
        </div>
        <div className="menu">
            <MenuBar />
        </div>
    </div><div className="withoutMenu">
            <div className="serach">
                <img src="./images/search.png" />
            </div>
            <div className=" basket">
                <img src="./images/basket.png" />
            </div>
            <div className="login">
                <Link to="/login"><img src="./images/login.png" /></Link>
            </div>
        </div>
        </div>

}