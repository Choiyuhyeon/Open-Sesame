import './page.css';
import GoQuestionButton from './components/GoQuestionButton/GoQuestionButton';
import LogoBotton from './components/LogoBotton/LogoBotton';
import QuestionForm from './components/QuestionForm/QuestionForm';
import papercupimg from '../../assets/images/papercupimg.png';

function HomePage() {
  return (
    <div className="home-page">
      {/* PC용: 오른쪽 위 버튼 */}
      <div className="top-area desktop-button">
        <GoQuestionButton />
      </div>

      <div className="main-area">
        <LogoBotton />

        {/* 모바일용: 로고 아래 버튼 */}
        <div className="mobile-button">
          <GoQuestionButton />
        </div>

        <QuestionForm />
      </div>

      <img src={papercupimg} alt="" className="papercup-image" />
    </div>
  );
}

export default HomePage;