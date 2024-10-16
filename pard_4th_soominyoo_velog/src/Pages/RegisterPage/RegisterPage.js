import React, { useState } from "react";
import { useRecoilState } from 'recoil';  
import { useNavigate } from 'react-router-dom'; 
import { userState } from '../../Atom';  // Atom.js에서 userState 가져오기
import './RegisterPage.css'; 

function RegisterPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userState);  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    introduction: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 모든 필드가 채워졌는지 확인
    if (formData.name && formData.email && formData.password && formData.introduction && formData.agreement) {
      // Recoil 상태에 사용자 데이터 저장
      setUserData({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        introduction: formData.introduction,
        agreement: formData.agreement,
      });
      // FeedPage로 이동
      navigate('/feed');
    } else {
      alert('모든 필드를 정확하게 입력해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-container">
      <div className="header">
        <h1>환영합니다!</h1>
        <p>기본 회원 정보를 등록해주세요</p>
      </div>

      {/* 이름 */}
      <div className="input-field name">
        <label className="register-label">이름</label>
        <input
          type="text"
          className="register-input"
          placeholder="이름을 입력해주세요."
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* 이메일 */}
      <div className="input-field email">
        <label className="register-label">이메일</label>
        <input
          type="email"
          className="register-input"
          placeholder="이메일을 입력해주세요."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* 비밀번호 */}
      <div className="input-field password">
        <label className="register-label">비밀번호</label>
        <input
          type="password"
          className="register-input"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* 한 줄 소개 */}
      <div className="input-field introduce">
        <label className="register-label">한 줄 소개</label>
        <input
          type="text"
          className="register-input"
          placeholder="당신을 한 줄로 소개해보세요."
          name="introduction"
          value={formData.introduction}
          onChange={handleChange}
        />
      </div>

      {/* 이용약관 및 개인정보처리방침 동의 */}
      <div className="register-agreement">
        <label>
          <input
            type="checkbox"
            className="register-checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <span>이용약관</span>과 <span>개인정보처리방침</span>에 동의합니다.
        </label>
      </div>

      <div className="button-group">
        <button type="submit" className="register-button register-submit-button">가입</button>
      </div>
    </form>
  );
}

export default RegisterPage;
