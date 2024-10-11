import React, { useState } from 'react';
import Header from './Header';
import FeedCard from './Card';

const FeedPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const feeds = [
    {
      imgSrc: '/img/sample1.png',
      title: '피곤해요',
      content: '할게 너무 많아요',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 27,
    },
    {
      imgSrc: '/img/sample1.png',
      title: '개강은 왜 하는걸까',
      content: '왜 개강임? 개처럼 강해지기는 힘들어',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 37,
    },
    {
      imgSrc: '/img/sample1.png',
      title: '게으르다고 쫓겨났다',
      content: '회사에서 게으르다고 쫓겨났다',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 47,
    },
    {
      imgSrc: '/img/sample1.png',
      title: '휴학 마려워요',
      content: '여러분 스트레이트는 절대 하지 마세요',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 47,
    },
    {
      imgSrc: '/img/sample1.png',
      title: '묵은지 찜닭',
      content: '왜 개강임? 개처럼..',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 47,
    },
    {
      imgSrc: '/img/sample1.png',
      title: '게으르다고 칭찬했다',
      content: '회사에서 게으르다고 칭찬했다.',
      date: '2024년 8월 14일',
      commentCount: 23,
      author: '살몬',
      likes: 47,
    },
  ];

  const filteredFeeds = feeds.filter((feed) =>
    feed.title.includes(searchTerm)
  );

  const pageStyle = {
    backgroundColor: '#F8F9FA', 
    padding: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'space-between',
  };

  return (
    <div style={pageStyle}>
      <Header
        menuItems={['트렌딩', '최신', '피드']}
        onSearch={setSearchTerm}
      />
      <div style={listStyle}>
        {filteredFeeds.map((feed, index) => (
          <FeedCard
            key={index}
            imgSrc={feed.imgSrc}
            title={feed.title}
            content={feed.content}
            date={feed.date}
            commentCount={feed.commentCount}
            author={feed.author}
            likes={feed.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
