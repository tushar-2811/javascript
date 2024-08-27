import React from 'react'
import { useRecoilValue } from 'recoil'
import { notificationAtom } from '../store/atoms/notification'

const Fun = () => {
    const notificationValue = useRecoilValue(notificationAtom);
  return (
    <div>
       <button> Notifications({notificationValue}) </button>
    </div>
  )
}

export default Fun
