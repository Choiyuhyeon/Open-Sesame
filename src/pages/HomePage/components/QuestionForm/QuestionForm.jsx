import { Link } from 'react-router-dom';
import { useState } from 'react';
import nameicon from '../../../../assets/images/nameicon.png';
import './QuestionForm.css';

function QuestionForm() {
  const [name, setName] = useState('');

  const isDisabled = name.trim() === '';

  return (
    <div className="question-card">
      <div className="input-wrapper">
        <img src={nameicon} alt="" className="input-icon" />

        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <Link
        to={isDisabled ? '#' : '/list'}
        className={`submit-button ${isDisabled ? 'disabled' : ''}`}
        onClick={(e) => {
          if (isDisabled) e.preventDefault();
        }}
      >
        질문 받기
      </Link>
    </div>
  );
}

export default QuestionForm;