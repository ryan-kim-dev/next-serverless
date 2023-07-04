# nextjs 13버젼 app router 사용 연습

참고자료: [Dave gray - Next.js Tutorial for Beginners | Next.js 13](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj)

## 1. nextjs 사용의 이점

### 1.1 SSR 지원

서버사이드 렌더링을 지원하므로 pre-rendering된 페이지와 전체 내용이 채워진 HTML 문서를 제공할 수 있다. 이는 SEO에 유리하다.

### 1.2 자동 코드 스플리팅

nextjs는 자동으로 코드를 작은 청크로 분할시키므로 사이트 로딩시간을 단축시켜준다.

### 1.3 SEO 최적화

SSR을 지원하므로 메타데이터가 전부 채워진 HTML 문서를 제공하여 SEO 최적화가 용이하다.
물론 CSR에서도 SEO를 대응하기 위해 [algoria](https://www.algolia.com/)와 같은 서비스를 사용할 수 있지만, SSR을 지원하는 nextjs를 사용하는 것이 더 편리하다.

### 1.4 개발환경 설정이 간편하다

nextjs는 webpack, babel, hot-reloading 등을 자동으로 설정해준다.

### 1.5 타입스크립트 지원

nextjs는 타입스크립트를 빌트인 지원하므로 에러 발견과 코드 완성에 도움을 준다.

### 1.6 스케일링 용이

코드 스플리팅, 캐싱, 서버리스 함수 등 다양한 기능을 제공하여 스케일링이 용이하다.

## 2. pre-rendering 이란?
