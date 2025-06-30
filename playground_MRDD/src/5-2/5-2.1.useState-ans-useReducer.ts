import React from 'react'

// 장점 : 훅으로 코드를 격리해 제공할 수 있다
// 단점 : 컴포넌트별로 초기화 됨으로 컴포넌트에 따라 서로 다른 상태를 가짐
export function useCounter() {
    const [counter, setCounter] = React.useState(0);

    const inc=()=>{
        setCounter((prev)=>prev + 1)
    }

  return {inc, counter}
}

// 두 컴포넌트가 동일한 상태를 바라보게 하기 위한 방법
// 1. 