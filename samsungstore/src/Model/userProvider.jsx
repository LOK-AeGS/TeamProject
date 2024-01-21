import {useState, createContext} from 'react'


export const UserContext = createContext();
export const UserProvider = ({children}) =>{
//로그인 정보를 받을 변수
    const [user,setUser] = useState('');

    return (
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
        )
}


