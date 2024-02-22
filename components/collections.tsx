"use client"
import { Collection } from '@/components/collection'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionsLoadingIndicator from './collections-loading-indicator'



export const Collections: FC = () => {
  const collections = useSelector((state: any) => state?.collections)
  const dispatch = useDispatch()

  const getCollections = async () => {
    try {
      const res = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
      const data = await res.json()
      const filteredData = data.items.filter((item: any) => item.type === "SINGLE" && item.viewType === "TILE")
      console.log(filteredData)
      dispatch({ type: 'getCollections', payload: filteredData })
    } catch (error) {
      console.error("error : ", error)
      dispatch({ type: 'getCollections', payload: [] })
    }
  }

  useEffect(() => {
    getCollections()
  }, [])
  return (
    (collections.loading)
    ? <CollectionsLoadingIndicator/>
    :<div>{collections.collections.map((item: any, key: number) => <Collection key={key} collection={item}/>)}</div>
  )
}
