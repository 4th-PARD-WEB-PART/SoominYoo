import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',  
  default: {
    name: '',
    email: '',
    password: '',
    introduction: '',
    agreement: false,
  },  // 기본 값 설정
});
