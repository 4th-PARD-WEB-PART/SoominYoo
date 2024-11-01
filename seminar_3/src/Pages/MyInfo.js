import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "../Atom";
import React from 'react';
import { Link } from "react-router-dom";

function Myinfo(){
    const [myAge, setMyAge] = useRecoilState(myInfoAge);
    const [myName, setMynName] = useRecoilState(myInfoName);

    return(
        <div>
            <h1>메인 페이지</h1>
            <h3>나이 : {myAge}</h3>
            <h4>이름 : {myName}</h4>

            <Link to = "/update">수정하기</Link>
        </div>
    );
}

export default Myinfo;