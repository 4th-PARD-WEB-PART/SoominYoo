import axios from "axios";

//경로 지정
const server = "http://ec2-13-209-3-68.ap-northeast-2.compute.amazonaws.com:8080";

// 여기서 중요한 점은 서버의 주소를 어떻게 완성하느냐입니다. 스웨거를 잘 확인하고 서버에게 어떻게 주소를 보낼 수 있을 지 생각해보세요.
// 템플릿 리터럴 (``) 을 이용해서 표현식을 잘 다룰 수 있도록 해봅시다.

export const getMembersAPI = async (part) => {
    try {
        // axios 사용해서 '/user.json' 엔드 포인드에서 데이터 가져옴
        // parameter: part
        const response = await axios.get(`${server}/user?part=${part}`, part);
        return response.data;
    } catch (error) {
        console.error("Error fetching(part) user data:", error);
        throw error;
    }
};


export const postMemberAPI = async (data) => {
    try {
        // axois 사용해 추가하려는 데이터 담아 서버로 보냄
        const response = await axios.post(`${server}/user`, data);
        return response;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


// 아래의 API는 클백세미나 때 진행할 예정입니다.

export const putMemberAPI = async (id, data) => {
    try {
        //your code here
        
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


export const deleteMemberAPI = async (id) => {
    try {
        //your code here

    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
};
