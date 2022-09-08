import React, { useState } from 'react'

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1)
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
                                         // Math.max 숫자 집합중에 가장 큰 수를 리턴하는 함수 
                                         //   - 0을 걸어놓았기 때문에 count - 1을 이행하되, 0보다 밑의 값은 리턴하지 못한다

  return [count, increaseCount, decreaseCount]
}
