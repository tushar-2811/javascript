import React from 'react';
import { useRecoilValue } from 'recoil';
import countAtom from '../store/atoms/count';
import { countTypeSelector } from '../store/selectors/countTypeState';

const CountType = () => {
    // const count = useRecoilValue(countAtom);
    const isEvenCountState = useRecoilValue(countTypeSelector);
  return (
    <div>
       {
        isEvenCountState ? (
            <h1> Even </h1>
        ) : (
            null
        )
       }
    </div>
  )
}

export default CountType
