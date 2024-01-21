import { TextField, Button } from "@mui/material";
import { useState} from "react"
import style from "./joinmembershipModules.css";
import axios from'axios'
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import {SetLoginUserInformation} from '../../ViewModel/setLoginUserInformation';
//이게 로그인 화면


export const JoinMemberShip = () =>{

    const accountId : string = useRef(""); //아이디
    const accountPw : string= useRef(""); //비밀번호
    const navigate = useNavigate()

    const navigate_to_sign_up = () => {
        navigate("/login/joinmembership")
    }

    const onSubmit = async(e) => {
     e.preventDefault();
     e.persist();

        console.log('/users/'+ accountId.current.value)
        const login = axios({
                    method: "GET",
                    url: '/users/' + accountId.current.value, //url + 아이디로 회원의 데이터 조회
                    }).then((user_information)=>{   //user_information의 data에 password가 담겨있다. 조심!
                        console.log(user_information.data.user_account_password)
                        if(user_information.data.user_account_password === accountPw.current.value){
                            alert("로그인 성공");
//                            set_user_information(user_information.data);
                            SetLoginUserInformation(user_information.data)
                            console.log(user_information.data)
//                            console.log(user);
                        }else{
                            alert("로그인 실패")}
                    })

     }
//input 에선 useRef가 찍히는데 (current.value)
//textField에선 useRef가 안찍힌다..;;
    return (
        <div>
            <label>아이디</label>
            <input
            id = "id"
            ref = {accountId}
            label = "아이디"
            />
            <label>비밀번호</label>
            <input
            id = "password"
            ref = {accountPw}
            label = "비밀번호"
            />
            <Button type = 'submit' onClick={(e)=>onSubmit(e)}>로그인</Button>
            <Button onClick ={navigate_to_sign_up}>회원가입</Button>
        
        </div>


    )
}