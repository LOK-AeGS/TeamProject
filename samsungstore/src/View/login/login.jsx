//회원가입 창
//처음엔 로그인 창을 보여줌
//그 밑에 회원가입 창을 누를 시 회원가입으로 넘어감
import {Button, TextField} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./loginModules.css";
import axios from 'axios';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
//강제 리랜더링 https://blog.logrocket.com/how-when-to-force-react-component-re-render/
//https://flykimjiwon.tistory.com/166
//문제발생 중복확인만 눌렀는데 자동으로 회원가입 버튼까지 눌러진다.
//HTML의 form 태그로 만들었기 때문에 일어나는 일이었음..
//여기서 judge_do_duplicate_test는 입력받는 값이 아니므로 current를 사용하면 안됨.
//***********************ERR 회원가입이 한번 완료되었는데 또 회원가입 버튼을 누르면 회원가입에 성공했다고 뜸 ㅅㅂ;
export const Login = () => {
    const navigate = useNavigate();
    const judge_do_duplicate_test : boolean = useRef(false);

//useRef를 사용하는 이유는
    const user_name : string = useRef("");
    const user_identification_number : string = useRef("");
    const user_phone : string = useRef("");
    const user_account_id : string = useRef("");
    const user_account_password : string  = useRef("");
    const user_birth : string  = useRef("");
    const user_email : string = useRef("");

    const onClick = async(e) => {
    if(user_account_id.current.value === ""){
        alert("아이디를 입력해주세요")
        }
    else{
        axios({
                     method: "GET",
                            url: '/users/' + user_account_id.current.value,
                     }).then((user_information)=>{
                        if(user_information.data.user_account_id === user_account_id.current.value){
                            alert("아이디가 중복됩니다.")
                            user_account_id.current.value = "";
                            console.log(judge_do_duplicate_test.current.value)
                        }else{
                            alert("사용가능한 아이디입니다!")
                            judge_do_duplicate_test.value = true;
                            console.log(judge_do_duplicate_test.current.value)
                        }
              })
              }
   }


    const onSubmit = async(e) =>{
    e.preventDefault();
    e.persist();
    if(judge_do_duplicate_test === false){
        alert("아이디 중복 체크 바람.")
    }else{
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
        alert("회원가입 완료!")
        navigate('/login')
//        navigate("/login/login")

        }
    }


    return (

            <div className = 'login'>
                <input name = 'user_name' type = 'text' ref={user_name} placeholder = "이름"/>
                <input name = 'user_identification_number' type = 'text' ref={user_identification_number} placeholder = ""/>
                <input name = 'user_phone' type = 'text' ref={user_phone} placeholder = "전화번호"/>
                <div>
                <input name = 'user_account_id' type = 'text' ref={user_account_id} placeholder = "아이디"/>
                <button name = "duplicateTest" onClick = {onClick}>중복확인</button>
                </div>
                <input name = 'user_account_password' type = 'text' ref={user_account_password} placeholder = "비밀번호"/>
                <input name = 'user_birth' type = 'text' ref={user_birth} placeholder = "생일"/>
                <input name = 'user_email' type = 'text' ref={user_email} placeholder = "이메일"/>
                <button type = "submit" onClick = {(e) =>onSubmit(e)}>회원가입</button>
            </div>


    )
}