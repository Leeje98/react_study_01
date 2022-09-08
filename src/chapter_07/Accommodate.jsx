import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

export default function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);  // 초기값 false
  const [count, increaseCount, decreaseCount] = useCounter(0); // 초기값0

  useEffect(() => {
    console.log('=====================');
    console.log('useEffect() is called.');
    console.log(`isFull: ${isFull}`)
  });

  // 의존성배열이 없는 useEffect
  // 컴포넌트 마운트 된 직후, 컴포넌트 값이 업데이트 될때마다 호출

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY)  // IsFull 데이터 저장
    console.log(`Current count value: ${count}`)
  }, [count])

  // 의존성배열이 있는 useEffect
  // 컴포넌트 마운트 된 직후, 컴포넌트 값이 업데이트 될때마다 호출



  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
                                {/* <button> 태그의 disabled 속성은 해당 버튼이 비활성화됨을 명시 */}
                                {/* isFull의 값이 false일땐 <button> 태그의 정상작동
                                    isFull의 값이 ture일때 <button> 태그 비활성화 */}
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      
      {isFull && <p style={{color: 'red'}}>정원이 가득찼습니다.</p>}
      {/* isFull의 값이 ture일때 <p> 태그 활성화 */}
    </div>
  )
}
