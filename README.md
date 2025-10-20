<!-- 마크다운 문서
# 대제목 ## 중제목  ### 소제목  -->

# 기획의도

저희 프로젝트는 1인 가구를 위한 편의점 조합 레시피 추천 웹 애플리케이션을 만들고자 시작했습니다.
최근 1인 가구의 증가와 함께 간편한 식사를 원하는 수요가 늘고 있지만, 대부분의 레시피 서비스는 집밥이나 정식 위주로 구성되어 있어 편의점 식재료를 활용한 레시피를 찾기 어렵습니다.
또한, 사용자가 어떤 재료를 선호하는지, 어떤 조합을 더 좋아하는지를 고려한 개인 맞춤형 조합 추천 기능도 부족한 상황입니다.
이에 따라 저희는 랜덤 조합 추천 기능, 카카오 API를 활용한 주변 편의점 위치 정보 제공, 그리고 사용자가 자신만의 조합을 공유하고 소통할 수 있는 게시글 작성 기능을 통해,
1인 가구가 보다 쉽고 재미있게 식사를 해결할 수 있도록 돕는 프로젝트를 기획하게 되었습니다.

# 구현할 핵심 기능

- CRUD
- SPA(router)
- React.Memo를 통한 최적화
- Redux
- 무한스크롤
- lazy, Suspense 처리하기
- 외부데이터 연동 (더미데이터 및 카카오 api 이용)
- 반응형웹 (pc, 모바일)

# 각자 맡은 역할

- 전하성 - 더미데이터, 게시판(CRUD)\_ 무한스크롤
- 윤요엘 - 전체적인 ui(SPA\_ lazy, Suspense), 마이페이지
- 김민식 - API기능, 편의점안내 화면

# flow + UI(gif 파일이면 더 좋음)

## 메인페이지

### flow

![mainpage flow](images/mp.png)

### gif(pc)

![mainpage_pc](images/main_p1.gif)

### 스크린샷(pc)

![mainpage_pc](images/main.png)

### 스크린샷(mobile)

![mainpage_mobile](images/main_m.png)

## 랜덤메뉴 후기 등록 및 편의점 안내

### flow

![랜덤메뉴 후기&편의점](images/rv.png)

### gif(pc)

![review_pc](images/rv.gif)

### 스크린샷(mobile)

![review_mobile](images/rv_m.png)

## 게시판

### flow

![notice flow](images/notice.png)

### gif(pc)

![notice_pc](images/notice_p.gif)

### 스크린샷(mobile)

![notice_mobile](images/notice_m.png)

## 마이페이지

### flow

![mypage flow](images/my.png)

### gif(pc)

![mypage_pc](images/my_p.gif)

### 스크린샷(mobile)

![mypage_mobile](images/my_m.png)

## redux

### flow

![redux flow](images/redux.png)

## 라이브러리 & API

### 라이브러리

    "axios": "^1.12.2",
    "classnames": "^2.5.1",

    "react-icons": "^5.5.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.9.4",

    "react-virtualized": "^9.22.6",
    "redux": "^5.0.1",
    "redux-devtools-extension": "^2.13.9",
    "sass": "^1.93.2",
    "styled-components": "^6.1.19",
    "web-vitals": "^2.1.0"

### API

kakaomap
