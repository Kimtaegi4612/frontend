# 리액트 개요
    - 개발언어
        - Javascript
            - *.js
            - es next 문법 -> babel -> 호환코드( es5|es6) 변환 -> html에 포함되어 실행 (external)
            - 위의 과정 => 빌드(build)

        - TypeScript
            - *.ts
            - type + es next 문법 -> 트랜스컴파일 -> es next -> babel -> 호환코드( es5|es6) 변환
            - 위의 과정 => 빌드(build)
        
        - 문법의 범위
            - TS > ES Next > ES5
                - 상위 언어로 갈수로 수단의 문제임
            - 어떤 언어로 개발하던 결론(최종구동되는 코드)
                -> ES5 or ES6 임 <= 빌드 과정을 통해 완성됨
    
    - 제작사
        - meta (구 페이스북)
    
    - 현재 개발등 포지션
        - 전자정부프레임웍 채택
            - https://github.com/eGovFramework/egovframe-template-simple-react
        - 기타 사용 빈도
            - https://trends.stackoverflow.co/?tags=angular,vue.js,reactjs,jquery
                - 현재 1위 react (점유율)
            - https://tsh.io/state-of-frontend/
                - 트랜드및 같이 언급되는 기술
                - react/next.js
                    - next.js는 reat기반으로 백엔드 구성할 수 있다
                    - typescript 형태로 주로 개발됨
    
    - SPA
        - Single Page Application
            - html 1개 존재
            - 사용자 인터렉션에 맞춰 화면갱신(페이지 변환(라우팅), 동적구성) 
                - 특정 요소를 타겟으로 다양한 비즈니스를 랜더링, 처리
                - 유저 입장에서는 10개의 화면-> 개발관점은 1개의 html일뿐
            - 프레임웍
                - react > angulra , vue(최근 중/대기업에서 찾기는함) 
                - vue는 앞선 기술을 기반으로 발전
    
    - 특징
        - react 사용이유
            - 개발자 가장 많다!! -> 서적, 참고자료, 등등 가장 많다!!
            - 강력한 스펀서 (메타)
            - 웹, 앱(react native), PC기반(electron 활용)
            - .... 
        - 기술적
            - 페이지 전환 : 라우팅
            - 페이지간 데이터 공유
                - 명시적 단방향 관리(순환구조)
                    - 복잡하지만, 명확하다!!
                - <->vue는 양방향 관리, 자유도 높다
            - JSX(Javascript XML) 지원
                - html + js를 결합한 구조
                - 화면 구성, 내용, 인터렉션형태 
            - 강력한 서드파트 라이브러리, 이식성 강함(공통)
                - npmjs.com
            - 훅
                - 해당 개념이 도입 => 객체지향적에서 `함수지향적`으로 전환
            - ...
                - 앱(웹)을 구성하는데 필요한 모든 생태계 준비되 어있다
                    - npmjs.com 에서 검색
    
    - history
        - 2010 ~ 15
            - 개발 시도 -> 페이스북, 인스타그램 적용시도
            - 애플의 앱규제 적책이 트리거!! -> 자체적인 플랫폼 필요!!
            - html5, css3, js발전등 
            - 실패
            - 인스타그램 인수후 적용시
                - 웹으로 개발 목표 -> 리액트,  JSX 등 개념
        - 2016이후
            - 인스타그램 적용
            - 넷플릭스 적용 -> 프런트앤드 시장 확산
        - 국내
            - TOSS, 카카오, 네이버, 네이버지도,... 
                - 2020이후 많이 회사 채택
                - react + django 많이 사용 <= JS, 파이썬
            - 지도플랫폼 대부분 적용

# next.js
    - react기반 개발
    - 기존 프런트엔드는 CSR 중심
    - next.js를 도입 => SSR을 사용할수 있게 지원
        - 유사 제품도 많음
    - react/next.js
        - 스프링부트와 next.js 는 충돌점이 많음!!
        - 차후 프로젝트 사용시  next 사용한다면, 포지션 정리필요!! 
    - 차후 문제

# 개발 환경 구축
    - 공식 공홈
        - react.dev
            - The library for web and native user interfaces
            - 웹 프런트엔드 - react or reactjs 
            - 앱(스마트폰:ios, android) - react native
            - 학습, api 문서 제공, 개발의 권장 방식 지원 x(자유롭게)
                - API 개선, 추가된방향성 -> 함수지향적
    - 개발 환경
        - 온라인 플랫폼
            - https://codepen.io/pen
            - https://codesandbox.io/p/sandbox/new?file=%2Fpublic%2Findex.html%3A15%2C56
            - https://stackblitz.com/edit/react-jsztca?file=src%2FApp.js

        - 로컬 환경
            - (*)html내에서 묘사 <=환경/방식 익숙하게 하는 장치
                - CDN방식 설치 -> 실제 개발 x
                ```
                    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                ```
            - (*)nodejs기반 react 웹구성 <= 최종형태
                - npm방식 설치

# basic
    - html 기반에서 cdn 방식으로 react 설치
    - 기본적인 react 구동 매커니즘 이해
    - React Developer Tools 설치
        - https://react.dev/learn/react-developer-tools
        - 크롬
            - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1
    
    - 리액트 구동 매커니즘 이해
    - 커스텀 컴포넌트 구성
        - 함수형, 객체형
        - props, state, 이벤트 처리
        - 화면갱신 매커니즘 (상태변수 업데이트 -> 화면갱신)
    - JSX 구성 규칙
        - html은 소문자, 커스텀 컴포넌트 첫글자 대문자
        - 루트 필요, 오버랩x (태그가 어긋나게 겹쳐진경우)
        - ();...