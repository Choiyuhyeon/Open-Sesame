import GoQuestionButton from './components/GoQuestionButton/GoQuestionButton';
import LogoButton from './components/LogoButton/LogoButton';
import QuestionForm from './components/QuestionForm/QuestionForm';
import sesameCharacterImg from '../../assets/images/sasamelogo.png';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* PC용: 오른쪽 위 버튼 */}
      <div className="top-area desktop-button">
        <GoQuestionButton />
      </div>

      <div className="main-area">
        <LogoButton />

        {/* 모바일용: 로고 아래 버튼 */}
        <div className="mobile-button">
          <GoQuestionButton />
        </div>

        <QuestionForm />
      </div>

      <img src={sesameCharacterImg} alt="sesame character img" className="main-sesame-img" />
    </div>
  );
}

export default HomePage;