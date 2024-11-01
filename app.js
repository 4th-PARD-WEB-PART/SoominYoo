import {useState} from "react";
import { de } from "vuetify/locale";

function App(){
    const [current, setCurrent] = useState(3);

    const update = () => {
        setCurrent(4);
    }

    return(
        <div>
            <div>현재 파드 기수는?</div>
            <div>{current}기</div>
            <button onClick={update}>업데이트</button>
        </div>
    )
}
export default App;