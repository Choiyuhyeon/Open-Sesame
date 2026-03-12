import React, { useState } from 'react';
import './FeedBox.css';
import defaultCatImage from '@/assets/images/img-profile-cat.png';
import thumbsUp from '@/assets/icons/icon-thumbs-up.svg';
import thumbsDown from '@/assets/icons/icon-thumbs-down.svg';
import { createAnswer } from '@/api/openmindApi';

const FeedBox = ({ questionData, user }) => {
  const {
    id: questionId,
    content: questionContent = '질문 내용이 없습니다.',
    likeCount = 0,
    createdAt = '',
    answer = null,
  } = questionData || {};

  const defaultProfile = defaultCatImage;

  // --- 상태 관리 ---
  const [answerText, setAnswerText] = useState(answer?.content || '');
  const [isAnswered, setIsAnswered] = useState(answer !== null); // answer 객체 있는지 여부
  const [isRejected, setIsRejected] = useState(answer?.isRejected || false);

  const isButtonActive = answerText.trim().length > 0;

  const handleAnswerSubmit = async () => {
    if (isButtonActive && !isAnswered) {
      if (!questionId) return; 
      // 답변등록 관련 오류 처리
      try {
        const result = await createAnswer(questionId, {
          content: answerText,
          isRejected: false
        });
        setIsAnswered(true);
      } catch (error) {
        console.error('답변 등록 실패:', error);
        alert('답변을 등록하는 중 문제가 발생했습니다.');
      }
    }
  };

  // 날짜 포맷 (예: 2023-11-01T02:24:43Z -> 2023.11.01)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  const formattedDate = formatDate(createdAt);
  const answerFormattedDate = formatDate(answer?.createdAt);

  return (
    <div className="feed-box">
      {/* 최상단: 상태 배지 */}
      <div className="badge-container">
        {isAnswered ? (
          <span className="status-badge">답변 완료</span>
        ) : (
          <span className="status0-badge">미답변</span>
        )}
      </div>

      {/* 질문 영역 */}
      <div className="question-section">
        <div className="meta-info">질문 · {formattedDate}</div>
        <h2 className="question-text">{questionContent}</h2>
      </div>

      {/* 답변 영역 */}
      <div className="answer-section">
        <div className="profile-container">
          <img
            src={user?.imageSource || user?.profileImage || defaultProfile}
            alt="profile"
            className="profile-img"
          />
        </div>

        <div className="content-container">
          <div className="user-info">
            <span className="nickname">{user?.name || user?.nickname || '익명'}</span>
            <span className="date">{isAnswered ? answerFormattedDate : formattedDate}</span>
          </div>

          {isAnswered ? (
            <p className="answer-content">
               {isRejected ? <span className="rejected-text">답변 거절</span> : answerText}
            </p>
          ) : (
            <div className="answer-input-wrapper">
              <textarea
                className="answer-textarea"
                placeholder="답변을 입력해주세요"
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
              />
              <button
                className={`btn-submit ${isButtonActive ? 'active' : 'disabled'}`}
                disabled={!isButtonActive}
                onClick={handleAnswerSubmit}
              >
                답변 완료
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="footer-section">
        <button className="btn-action btn-like">
          <img src={thumbsUp} alt="좋아요" className="btn-icon" />
          좋아요 {likeCount > 0 ? likeCount : ''}
        </button>
        <button className="btn-action btn-dislike">
          <img src={thumbsDown} alt="싫어요" className="btn-icon" />
          싫어요
        </button>
      </div>
    </div>
  );
};

export default FeedBox;
