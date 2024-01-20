//회원가입 창
//처음엔 로그인 창을 보여줌
//그 밑에 회원가입 창을 누를 시 회원가입으로 넘어감
import {Button, TextField} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./loginModules.css";
import axios from 'axios';
import {useRef} from 'react';

//https://flykimjiwon.tistory.com/166
export const Login = () => {

//useRef를 사용하는 이유는
    const user_name = useRef("");
    const user_identification_number = useRef("");
    const user_phone = useRef("");
    const user_account_id = useRef("");
    const user_account_password = useRef("");
    const user_birth = useRef("");
    const user_email = useRef("");

    const onSubmit = async(e) =>{
    e.preventDefault();
    e.persist();

//    let formData = new formData();
/*\
    let dataSet = {

             user_name: '46',
             user_identification_number: '345',
             user_phone: '123',
             user_account_id: '456',
             user_account_password: '456',
             user_birth: '123',
             user_email: '456'
        }
*/
// input 태그에 ref = {useRef변수}를 달아주면 target이 됨
//useRef.current 는 e.target과 마찬가지임.
//값을 받아오려면 useRef.current.value를 해줭햐ㅏㄴ다.
//값이 안바뀌어서 계속 오류가 떴던건네 ㅋ;;
    let dataSet = {
        user_name: user_name.current.value,
        user_identification_number: user_phone.current.value,
        user_phone: user_phone.current.value,
        user_account_id: user_account_id.current.value,
        user_account_password: user_account_password.current.value,
        user_birth: user_birth.current.value,
        user_email: user_email.current.value,
    }
//        formData.append("user_account_id",user_account_id);
//        formData.append("user_identification_number",user_identification_number);
//        formData.append("user_phone",user_phone);
//        formData.append("user_account_id",user_account_id);
//        formData.append("user_account_password",user_account_password);
//        formData.append("user_birth",user_birth);
//       formData.append("user_email",user_email);
//        const blob = new Blob([JSON.stringify(dataSet)],{type:"application/json"})
//        formData.append("data",blob);
//        formData.append("user_data",dataSet);
//        console.log(user_email.current.value);
        var data = JSON.stringify(dataSet)
        console.log(data)
        const postLogin = await axios({
            method: "POST",
            url: '/users/new',
            mode: "cors",
            headers: {
                "Content-Type":"application/json",
            },
            data: data
            //https://velog.io/@jyleedev/415-Unsupported-Media-Type

        });
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
            <form onSubmit={(e) => onSubmit(e)} className = 'login'>
                <input name = 'user_name' type = 'text' ref={user_name} placeholder = "이름"/>
                <input name = 'user_identification_number' type = 'text' ref={user_identification_number} placeholder = ""/>
                <input name = 'user_phone' type = 'text' ref={user_phone} placeholder = "전화번호"/>
                <input name = 'user_account_id' type = 'text' ref={user_account_id} placeholder = "아이디"/>
                <input name = 'user_account_password' type = 'text' ref={user_account_password} placeholder = "비밀번호"/>
                <input name = 'user_birth' type = 'text' ref={user_birth} placeholder = "생일"/>
                <input name = 'user_email' type = 'text' ref={user_email} placeholder = "이메일"/>
                <button type = "submit">제출</button>
            </form>


    )
}