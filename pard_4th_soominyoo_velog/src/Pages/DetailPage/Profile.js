import React from 'react';
import profileImage from '../../img/profile-icon.png'; 
import githubIcon from '../../img/github-icon.png'; 
import homeIcon from '../../img/home-icon.png'; 
import emailIcon from '../../img/email-icon.png'; 

const Profile = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Arial, sans-serif',
    margin: '20px 0', 
    paddingLeft: '20px', 
    maxWidth: '600px',
    marginLeft: '250px',
    marginTop: '100px',
    marginLeft:'250px',
  };

  const profileSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const profileImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginRight: '20px',
    backgroundColor: '#ddd',
  };

  const textStyle = {
    textAlign: 'left', 
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    fontSize: '16px',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    marginTop: '20px',
    paddingTop: '10px', 
    borderTop: '1px solid #ccc', 
    width: '1000px', 
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* 프로필 */}
      <div style={profileSectionStyle}>
        <img src={profileImage} alt="프로필" style={profileImageStyle} />
        <div style={textStyle}>
          <div style={nameStyle}>김광일</div>
          <div style={descriptionStyle}>개발을 꿈꾸는 사람입니다.</div>
        </div>
      </div>

      {/* 아이콘 */}
      <div style={socialIconsStyle}>
        <img src={githubIcon} alt="GitHub" style={iconStyle} />
        <img src={homeIcon} alt="Home" style={iconStyle} />
        <img src={emailIcon} alt="Email" style={iconStyle} />
      </div>
    </div>
  );
};

export default Profile;
