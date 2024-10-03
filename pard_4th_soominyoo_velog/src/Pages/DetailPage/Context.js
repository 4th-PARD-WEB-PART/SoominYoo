import React from 'react';
import Sharebox from '../../img/Share-box.png'; 

const Context = () => {
  const containerStyle = {
    display: 'flex', 
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'left',
    marginLeft: '50px',
  };

  const authorDateStyle = {
    fontSize: '16px',
    color: '#555',
    textAlign: 'left',
    marginTop: '40px',
    marginLeft: '50px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    color: '#777',
    fontSize: '14px',
    cursor: 'pointer',
    marginLeft: '10px', 
  };

  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px', 
    marginTop: '170px',
    position: 'sticky', 
  };

  const contentStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    marginLeft: '20px', 
    marginTop: '100px',
    textAlign: 'left',
    marginLeft: '50px',
  };

  const iconStyle = {
    width: '60px', 
    height: 'auto', 
    cursor: 'pointer',
    marginBottom: '20px', 
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <img src={Sharebox} alt="Share-box" style={iconStyle} />
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={titleStyle}>PARD 4기 화이팅</h1>
        <div style={authorDateStyle}>
          <div>
            <span style={{color:'black'}}>김광일</span>
            <span style={{ marginLeft: '10px' }}>24.08.14</span>
          </div>
          <div style={{ marginRight: '70px' }}> 
            <span style={buttonStyle}>통계</span>
            <span style={buttonStyle}>수정</span>
            <span style={buttonStyle}>삭제</span>
          </div>
        </div>
        <div style={contentStyle}>
          이 글은 PARD 4기 여러분에게 과제가 될 것입니다.
        </div>
      </div>
    </div>
  );
};

export default Context;
