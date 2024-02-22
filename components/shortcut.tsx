/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'



export const ShortcutItem: FC<any> = ({shortcut}) => {
  console.log("shortcut", shortcut)
  return (
    <div className='flex flex-col items-center'>
      <img src={shortcut.imageUrl} alt=""
        className='w-[48px] h-[48px] lg:w-[62px] lg:h-[62px]'
      />
      <div className='mt-[8px] text-black text-[11px] text-center tracking-[-0.3px] leading-[15px]'>{shortcut.title}</div>
    </div>
  )
}
