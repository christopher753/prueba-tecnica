import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says/hello?json=true'

export function useCatImage ({ fact }) {
  const [imageId, setImageId] = useState()
  useEffect(() => {
    if (!fact) return
    fetch(CAT_ENDPOINT_RANDOM_IMAGE)
      .then(response => response.json())
      .then(data => {
        const { _id: id } = data
        setImageId(id)
      })
  }, [fact])

  const getImage = () => {
    const firstWord = fact.split(' ')[0]
    return `https://cataas.com/cat/${imageId}/says/${firstWord}?fontSize=50&fontColor=red`
  }

  return { imageId, getImage }
}
