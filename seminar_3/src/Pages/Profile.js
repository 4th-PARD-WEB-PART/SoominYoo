import { useParams } from "react-router-dom";

const data = {
    Kki: {
        name: "유수민",
        discription: "안녕하세요 수민이에오"
    },

    Kce: {
        name: "권채은",
        discription: "파드 4기 부파트장"
    },

    Sum:{
        name: "뚜미닝",
        discription:"안녕하세요 뚜미니에옹"
    }
}

function Profile() {
    const params = useParams();

    const profile = data[params.username];

    return(
        <div>
            <h1>사용자 프로필</h1>
            {
                profile
                ?(
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.discription}</p>
                    </div>
                )
                : (<p>존재하지 않는 프로필입니다.</p>)
            }
        </div>
    )
}
export default Profile;