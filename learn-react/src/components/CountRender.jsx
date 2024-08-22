import React from 'react';
import {useRecoilValue} from 'recoil';
import countAtom from '../store/atoms/count'

const CountRender = () => {
    const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  )
}

export default CountRender
