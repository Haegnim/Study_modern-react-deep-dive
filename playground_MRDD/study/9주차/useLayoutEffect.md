# useLayoutEffect

useEffect와 동일하게 사용

모든 Dom 변경 후에 useLayoutEffect의 콜백 함수 실행이 동기적으로 발생

1. 리액트가 dom을 업데이트
2. useLayoutEffect 실행
3. 브라우저에 변경 사항을 반영
4. useEffect를 실행

Dom 계산은 되었지만 화면에 반영되지 전에 하고 싶은 작업이 있을 때 사용
ex) 스크롤 위치 제어
