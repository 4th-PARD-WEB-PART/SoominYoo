import photo from './sooming.JPG';
import './App.css';

function App() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <div className='Photo'>
          <img 
            src={photo} 
            className="Profile-photo" 
            alt="My profile" 
          />
        </div>
        <div className='Name'>
          <h2>유수민</h2>
          <h4>안녕하세요 수민이에오</h4>
        </div>

        <div className='MBTI'>
          <h2>MBTI</h2>
          <h4>ENTP</h4>
        </div>
        
        <div className='Purpose'>
          <h2>이번학기 목표</h2>
          <h4>졸업 취업 복권당첨</h4>
        </div>

        <div className='Fav'>
          <h2>좋아하는 것</h2>
          <h4>누워있기 차 돈</h4>
        </div>

      </header>
    </div>
  );
}

export default App;
