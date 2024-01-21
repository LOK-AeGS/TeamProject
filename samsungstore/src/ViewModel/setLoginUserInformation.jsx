import {useContext} from 'react';
import {UserContext} from '../Model/userProvider';
//로그인 정보를 Model user에 넘겨줌

export const SetLoginUserInformation = (inform) => {
// useContext를 사용하여 각 provier 컨텍스트에서 state를 가져온다.
// {}는 자바스크립트 값 []는 배열 여기서 [user,setUser]를 해서 iterable 오류가 남
    const {user,setUser} = useContext(UserContext);
//    console.log('회원 정보')
//    console.log(inform)
    setUser(inform);

}
