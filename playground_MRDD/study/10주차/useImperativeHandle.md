# useImperativeHandle

> 부모에게서 넘겨받은 ref를 원하는 대로 수정할 수 있는 훅

자식에서 이벤트 정의 => 부모에서 실행 코드 작성 가능

```ts
const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});
```
