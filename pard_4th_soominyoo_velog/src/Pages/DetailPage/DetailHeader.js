import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import velogLogo from '../../img/detail-logo.png'; 
import bellIcon from '../../img/bell-icon.png'; 
import searchIcon from '../../img/search-icon.png';  
import profileIcon from '../../img/profile-icon.png';  

const Header = () => {
  const navigate = useNavigate(); 

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 40px', 
    top: '0',
  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',  
  };

  const logoStyle = {
    width: '50px',  
    height: '50px',
    marginRight: '32px',
    marginLeft: '100px',
    cursor: 'pointer',  
  };

  const iconStyle = {
    width: '22px',
    height: '22px',
    marginRight: '8px',
  };

  const profileIconStyle = {
    width: '40px',
    height: '40px', 
    marginRight: '100px',
  };

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',  
  };

  const buttonStyle = {
    padding: '8px 20px',
    border: '1px solid #dee2e6',
    borderRadius: '24px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const textStyle = {
    fontFamily: 'Inter, sans-serif',  
    fontSize: '22px',                 
    fontWeight: 700,               
    lineHeight: '26.63px',          
    textAlign: 'left',              
  };

  const handleLogoClick = () => {
    navigate('/feed');
  };

  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <img 
          src={velogLogo} 
          alt="velog logo" 
          style={logoStyle} 
          onClick={handleLogoClick}  
        /> 
        <span style={textStyle}>oksk6681.log</span>
      </div>
      <div style={rightStyle}>
        <img src={bellIcon} alt="알림 아이콘" style={iconStyle} /> 
        <img src={searchIcon} alt="검색 아이콘" style={iconStyle} /> 
        <button style={buttonStyle}>새 글 작성</button>
        <img src={profileIcon} alt="프로필 아이콘" style={profileIconStyle} /> 
      </div>
    </header>
  );
};

export default Header;
