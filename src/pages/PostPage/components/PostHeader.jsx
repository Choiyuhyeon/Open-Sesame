import '../components/PostHeader.css';
import OpenMindHeader from '../../../assets/images/OpenMindHeader.png';
import OpenMindLogo from '../../../assets/images/OpenMindLogo.svg';
import Profile from '../../../assets/images/Profile.png';
import LinkVector from '../../../assets/images/Link.svg';
import KakaoVector from '../../../assets/images/Kakaotalk.svg';
import FacebackVector from '../../../assets/images/Facebook.svg';

function PostHeader() {
  const Name = '아초는 고양이';
  return (
    <>
      <div id="postpage-header">
        <img className="post-header" src={OpenMindHeader} alt="OpenMind 헤더" />
        <img className="post-logo" src={OpenMindLogo} alt="OpenMind 로고" />
        <img className="post-profile" src={Profile} alt="OpenMind 프로필" />
        <p className="post-name">{Name}</p>
        <div className="post-icons">
          <button className="post-linkBtn">
            <img
              className="post-linkVector"
              src={LinkVector}
              alt="링크 아이콘"
            />
          </button>
          <button className="post-kakaoBtn">
            <img
              className="post-kakaoVector"
              src={KakaoVector}
              alt="카카오 아이콘"
            />
          </button>
          <button className="post-facebookBtn">
            <img
              className="post-facebookVector"
              src={FacebackVector}
              alt="페이스북 아이콘"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default PostHeader;
