//로그인 및 회원가입 창
//처음엔 로그인 창을 보여줌
//그 밑에 회원가입 창을 누를 시 회원가입으로 넘어감
import {Button, TextField} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./loginModules.css";
import axios from 'axios';

//https://flykimjiwon.tistory.com/166
export const Login = () => {
    const [accountId, setAccountId] = useState([]); //아이디
    const [accountPw, setAccountPw] = useState([]); //비밀번호





    const onSubmit = async(e) =>{
    e.preventDefault();
    e.persist();

    let formData = new FormData();


    let dataSet = {

             user_name: '46',
             user_identification_number: '345',
             user_phone: '123',
             user_account_id: '456',
             user_account_password: '456',
             user_birth: '123',
             user_email: '456'
        }

        const blob = new Blob([JSON.stringify(dataSet)],{type:"application/json"})

        formData.append("data",blob);

        const postLogin = await axios({
            method: "POST",
            url: '/users/new',
            mode: "cors",
            headers: {
                "Content-Type":"application/json",
            },
            data: dataSet;
            //https://velog.io/@jyleedev/415-Unsupported-Media-Type

        });
        console.log(formData);


    }


    return (

    /*
            <div className='login'>
            <div className = 'idLabel'>
            <label>아이디</label>
            </div>

            <TextField //<>를 붙여줘야함 이유는 모르겠따만.
            id="id"
            label="아이디"
            defaultValue={accountId} //defaultValue로 설정을 해줘야지만 입력이 가능해진다. 마찬가지로 onValueChange로 바꿔줘야함.
            onValueChange={[(e) => setAccountId(e.target.defaultValue)]} 
            />   
            <label>비밀번호</label>
            <TextField
            id="password"
            label="비밀번호"
            defaultValue={accountPw}
            onValueChange={(e)=>setAccountPw(e.target.defaultValue)}
            />
            <div className = "buttonZone">
            <Link to = "/login/joinmembership"/><Button>회원가입</Button>
            <Button type = "submit">로그인</Button>
            </div>
            </div>
            */
            <form onSubmit={(e) => onSubmit(e)}>
                <button type = "submit">제출</button>
            </form>


    )
}