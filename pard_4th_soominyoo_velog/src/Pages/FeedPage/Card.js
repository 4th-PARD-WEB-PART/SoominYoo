import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedCard = ({ title, content, date, commentCount, author, likes }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const navigate = useNavigate(); 

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCardClick = () => {
    // 카드 클릭 시 DetailPage로 이동
    navigate('/detail', {
      state: { title, content, date, commentCount, author, likes }
    });
  };

  const cardStyle = {
    backgroundColor: '#fff',
    width: '327px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '10px',
    cursor: 'pointer', 
  };

  const imgStyle = {
    width: '300px',
    height: '150px',
    objectFit: 'cover',
    backgroundColor: '#e57373',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '12px 0',
    color: '#212529',
    textAlign: 'left',
  };

  const contentStyle = {
    fontSize: '14px',
    color: '#495057',
    marginBottom: '16px',
    textAlign: 'left',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    marginTop: '10px',
    borderTop: '1px solid #e9ecef',
    paddingTop: '8px',
  };

  const authorStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const authorImageStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#dee2e6',
    marginRight: '8px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle} onClick={handleCardClick}>
      <div style={imgStyle}></div>
      <h2 style={titleStyle}>{title}</h2>
      <p style={contentStyle}>{content}</p>
      <p style={contentStyle}>{date} | {commentCount}개의 댓글</p>
      <div style={footerStyle}>
        <div style={authorStyle}>
          <div style={authorImageStyle}></div>
          <p>{author}</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation(); 
            toggleLike();
          }}
          style={buttonStyle}
        >
          {liked ? '❤️' : '🤍'} {likeCount}
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
