import React from 'react';
import velogLogo from '../../img/velog-logo.png';  // 로고 이미지 
import trendingIcon from '../../img/trending-icon.png';  // 트렌딩 아이콘 이미지 
import latestIcon from '../../img/latest-icon.png';  // 최신 아이콘 이미지 
import feedIcon from '../../img/feed-icon.png';  // 피드 아이콘 이미지 
import bellIcon from '../../img/bell-icon.png';  // 알림 아이콘 이미지 
import searchIcon from '../../img/search-icon.png';  // 검색 아이콘 이미지 
import profileIcon from '../../img/profile-icon.png';  // 프로필 아이콘 이미지 

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#F8F9FA',  
    borderBottom: '1px solid #e9ecef',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  };

  const leftStyle = {
    display: 'flex',
    flexDirection: 'column',  
    alignItems: 'flex-start',  
  };

  const logoStyle = {
    width: '120px',
    height: 'auto',
    marginBottom: '16px',
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px',
    fontSize: '16px',
    color: '#495057',
    cursor: 'pointer',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
  };

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',  
  };

  const buttonStyle = {
    marginLeft: '16px',
    padding: '8px 16px',
    border: '1px solid #dee2e6',
    borderRadius: '24px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <img src={velogLogo} alt="velog logo" style={logoStyle} /> 
        <nav style={menuStyle}>
          <div style={menuItemStyle}>
            <img src={trendingIcon} alt="트렌딩 아이콘" style={iconStyle} />
            <span style={{ fontWeight: 'bold' }}>트렌딩</span>
          </div>
          <div style={menuItemStyle}>
            <img src={latestIcon} alt="최신 아이콘" style={iconStyle} />
            <span>최신</span>
          </div>
          <div style={menuItemStyle}>
            <img src={feedIcon} alt="피드 아이콘" style={iconStyle} />
            <span>피드</span>
          </div>
        </nav>
      </div>
      <div style={rightStyle}>
        <img src={bellIcon} alt="알림 아이콘" style={iconStyle} /> 
        <img src={searchIcon} alt="검색 아이콘" style={iconStyle} /> 
        <button style={buttonStyle}>새 글 작성</button>
        <img src={profileIcon} alt="프로필 아이콘" style={iconStyle} /> 
      </div>
    </header>
  );
};

export default Header;
