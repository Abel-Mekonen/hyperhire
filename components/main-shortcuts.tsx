'use client'
import { ShortcutItem } from '@/components/shortcut'
import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShortcutLoadingIndicator from './shortcut-loading-indicator'



export const Shortcuts: FC = () => {
  const shortcuts = useSelector((state: any) => state?.shortcuts)
  const dispatch = useDispatch()

  const getShortcuts = async () => {
    try {
      const res = await fetch('https://api.testvalley.kr/main-shortcut/all')
      const data = await res.json()
      dispatch({ type: 'getShortcuts', payload: data })
    } catch (error) {
      console.error("error : ", error)
      dispatch({ type: 'getShortcuts', payload: [] })
    }
  }

  useEffect(() => {
    getShortcuts()
  }, [])

  console.log(shortcuts.shortcuts)
  return (
    (shortcuts.loading) 
    ? <ShortcutLoadingIndicator/> 
    :<div className="
      py-[16px] grid grid-cols-5
      gap-y-[24px] gap-x-[12px]
      lg:flex lg:flex-row lg:justify-center lg:justify-between
    ">
      {shortcuts?.shortcuts.map((item: any) => <ShortcutItem key={item.mainShortcutId} shortcut={item}/>)}
    </div>
  )
}
