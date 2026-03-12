import './PostPage.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShare } from '@/hooks/useShare';
import { deleteSubject } from '@/api/openmindApi';
import PostHeader from '@/components/post/PostHeader/PostHeader';
import NoQuestion from '@/components/post/NoQuestion/NoQuestion';
import QuestionButton from '@/components/post/QuestionButton/QuestionButton';
import AlertModal from '@/components/common/AlertModal/AlertModal';

function PostPage() {
  const navigate = useNavigate(); // 삭제 후 홈으로 이동할 때 사용
  const { id } = useParams(); // URL에서 subject id 받기

  const [data, setData] = useState({
    name: undefined,
    profile: undefined,
  });

  const [showToast, setShowToast] = useState(false); // 토스트
  const [renderToast, setRenderToast] = useState(false); // 렌더링
  const [toastMessage, setToastMessage] = useState(''); // 토스트 문구를 상황별로 바꾸기 위해 추가

  const { copyLink, shareKakao, shareFacebook } = useShare(setShowToast);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // onClickEditName 에러 방지용 상태 추가

  useEffect(() => {
    if (showToast) {
      setRenderToast(true);
      return;
    }

    const EXIT_MS = 250;
    const t = setTimeout(() => setRenderToast(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [showToast]);

  // 링크 복사 토스트와 삭제 토스트를 같이 쓰기 위해 감싸는 함수로 변경
  const handleCopyLink = () => {
    setToastMessage('URL이 복사되었습니다!');
    copyLink();
  };

  // 질문대상 삭제 함수
  const handleDeleteSubject = async () => {
    try {
      await deleteSubject(Number(id)); // data.id 대신 params id 사용

      console.log('삭제 완료');

      setToastMessage('탈퇴가 완료되었습니다.'); // 삭제 성공 토스트 문구
      setShowToast(true); // 삭제 성공 시 토스트 띄우기
      setIsDeleteModalOpen(false);

      setTimeout(() => {
        navigate('/');
      }, 1000); // 토스트 잠깐 보여주고 이동
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  return (
    <>
      <div className="postpage-wrapper">
        <PostHeader
          {...data}
          linkIcon={handleCopyLink} // 기존 copyLink 대신 토스트 문구까지 처리하는 함수 연결
          kakaoIcon={shareKakao}
          facebookIcon={shareFacebook}
          onClickEditName={() => setIsEditModalOpen(true)}
          onClickDelete={() => setIsDeleteModalOpen(true)}
        />
        {isDeleteModalOpen && (
          <div
            className="modal-overlay"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <AlertModal
                text="정말로 탈퇴하시겠습니까?"
                onConfirm={handleDeleteSubject}
                onCancel={() => setIsDeleteModalOpen(false)}
              />
            </div>
          </div>
        )}
        {renderToast && (
          <div className={`toast-msg ${showToast ? 'toast-in' : 'toast-out'}`}>
            {toastMessage}
          </div>
        )}
        <div className="content-area">
          <NoQuestion />
          <QuestionButton />
        </div>
      </div>
    </>
  );
}

export default PostPage;
