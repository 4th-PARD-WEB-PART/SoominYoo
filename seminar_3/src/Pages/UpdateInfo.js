import React from "react";
import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "../Atom";
import { useNavigate } from "react-router-dom";

function UpdateInfo(){
    const [myAge, setMyAge] = useRecoilState(myInfoAge);
    const [myName, setMyName ] = useRecoilState(myInfoName);
    
    const navigator = useNavigate();

    const submitHandler = () => {
        if (window.confirm('수정하시겠습니깡?')){
            alert("수정되었습니다.");
            navigator("/");
        } else {
            alert("취소되었습니다.");
        }
    }
    return (
        <div>
            <h1>정보 수정하는 페이지</h1>
            <div>
                <span>나이</span>
                <input type="number" value={myAge} onChange={(e) => setMyAge(e.target.value)}/>
            </div>

            <div>
                <span>이름</span>
                <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)}/>
            </div>
            <button onClick={submitHandler}>수정하기</button>
        </div>
    )
}
export default UpdateInfo;