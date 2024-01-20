import { TextField, Button } from "@mui/material";
import { useState } from "react"
import style from "./joinmembershipModules.css";
import axios from'axios'
import {useRef} from 'react';
//이게 로그인 화면

export const JoinMemberShip =() =>{
    const accountId = useRef(""); //아이디
    const accountPw = useRef(""); //비밀번호


    const onSubmit = async(e) => {
     e.preventDefault();
     e.persist();

        console.log('/users/'+ accountId.current.value)
        const postLogin = axios({
                    method: "GET",
                    url: '/users/' + accountId.current.value, //url + 아이디로 회원의 데이터 조회
                    }).then((user_information)=>{   //user_information의 data에 password가 담겨있다. 조심!
                        console.log(user_information.data.user_account_password)
                        if(user_information.data.user_account_password === accountPw.current.value){
                            alert("로그인 성공")
                        }else{
                            alert("로그인 실패")}
                    })


     }
//input 에선 useRef가 찍히는데 (current.value)
//textField에선 useRef가 안찍힌다..;;
    return (
        <form onSubmit = {(e) => onSubmit(e)}>
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
            <Button type = 'submit'>회원가입 완료</Button>
        
        </form>


    )
}