import { Link } from 'react-router-dom';
import './GoQuestionButton.css';

function GoQuestionButton() {
  return (
    <Link to="/list" className="go-question-button">
        <span>질문하러 가기 →</span>
    </Link>
  );
}

export default GoQuestionButton;