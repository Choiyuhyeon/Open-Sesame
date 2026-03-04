# Open-Sesame


#
### **URL 구조 (라우팅 구조)**

- /                       → 메인 (피드 생성)
- /list                   → 질문 목록
- /post/:id               → 개별 피드 (질문 보기)
- /post/:id/answer        → 답변 페이지

/  

메인 페이지

→ 이름 입력하고 "질문 받기" 누르는 화면

/list

질문 목록 페이지

→ 여러 사람 피드 카드가 보이는 화면

/post/:id

특정 사람의 질문 목록을 보는 페이지

/post/:id/answer

피드에 답변하는 관리자 페이지

# React + Vite

- 이번 프로젝트는 소규모라 App에서 직접 라우팅 관리하는 구조 <br>
- 저장 시 자동 포맷되도록 ESLint + Prettier 통합 설정 
