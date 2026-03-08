import React from 'react';
import './QuestionContainer.css';
import QuestionIcon from '@/assets/icons/icon-question.svg';
import FeedCardAnswer from './FeedCardAnswer';

function QuestionContainer({ questions = [] }) {
  // 데이터가 없으면 빈 객체 하나가 들어있는 배열을 사용함 (이러면 카드 하나가 뜸)
  const displayList = questions.length > 0 ? questions : [{}];

  return (
    <div id="question-container">
      <div className="container-header">
        <img className="questionIcon" src={QuestionIcon} alt="질문" />
        <p className="questionState-text">
          {questions.length}개의 질문이 있습니다
        </p>
      </div>

      <div className="question-list">
        {displayList.map((q, index) => (
          <FeedCardAnswer key={index} {...q} />
        ))}
      </div>
    </div>
  );
}

export default QuestionContainer;
