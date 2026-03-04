// 프로젝트 공통 테마 설정
const theme = {
  colors: {
    blue: {
      primary: "#3692FF",  
      active: "#1251AA",
    },

    // 기본 컬러
    white: "#FFFFFF",
    black: "#1F2937",

    // 그레이 계열 
    gray: {
      text: "#9CA3AF",     
      bg: "#F3F4F6",       
      bgLight: "#F9FAFB",  
    },
  },

  // 반응형 브레이크포인트
  mediaQuery: {
    tablet: "screen and (min-width: 768px)",
    desktop: "screen and (min-width: 1280px)",
  },
};

export default theme;