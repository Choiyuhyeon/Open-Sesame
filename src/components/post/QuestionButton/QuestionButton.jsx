import './QuestionButton.css';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
function QuestionButton({}) {
  const navigate = useNavigate();
  return (
    <>
      <div id="questionBtn-box">
        <button
          className="questionBtn"
          onClick={() => {
            navigate('/c');
          }}
        >
=======
function QuestionButton({ onClick }) {
  return (
    <>
      <div id="questionBtn-box">
        <button className="questionBtn" onClick={onClick}>
>>>>>>> b4791b57a5285d32e809c3d7884810bb7482e917
          <p className="text-not-mobile">질문 작성하기</p>
          <p className="text-mobile">질문 작성</p>
        </button>
      </div>
    </>
  );
}

export default QuestionButton;
