import { TextField, Button } from "@mui/material";
import { useState } from "react"
import style from "./joinmembershipModules.css";


export const JoinMemberShip =() =>{
    const [accountId, setAccountId] = useState([]); //아이디
    const [accountPw, setAccountPw] = useState([]); //비밀번호
    const [accountMiddleName, setAccountMiddleName] = useState([]); //이름 성과 이름 붙이기 
    const [accountPhoneNumber, setAccountPhoneNumber] = useState([]); //전화번호
    return (
        <div className="container">
            <label>아이디</label>
            <TextField
            id = "id"
            defaultValue = {accountId}
            label = "아이디"
            onValueChange ={(e) => e.target.defaultValue}
            />
            <label>비밀번호</label>
            <TextField
            id = "password"
            defaultValue = {accountPw}
            label = "비밀번호"
            onValueChange ={(e) => e.target.defaultValue}
            />
            <label>이름</label>
            <TextField
            id = "MiddleName"
            defaultValue = {accountMiddleName}
            label = "이름"
            onValueChange ={(e) => e.target.defaultValue}
            />
            <label>전화번호</label>
            <TextField
            id = "phoneNumber"
            defaultValue = {accountPhoneNumber}
            label = "핸드폰 번호"
            onValueChange ={(e) => e.target.defaultValue}
            />
            <Button type = 'submit'>회원가입 완료</Button>

        
        </div>


    )
}