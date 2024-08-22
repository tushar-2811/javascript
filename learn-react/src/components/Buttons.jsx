import React from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import countAtom from '../store/atoms/count'

const Buttons = () => {
    const[count , setCount] = useRecoilState(countAtom);
    // const setCount = useResetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((prev) => {
        return prev+1
      })} >Increase</button>
      <button onClick={() => setCount(prev => prev-1)} >Decrease</button>
    </div>
  )
}

export default Buttons
