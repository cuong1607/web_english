import React from 'react'
import { MainVideos } from './listVideos/mainVideos'
export const MainWork = () => {
    const listWork = [
        {
          name:'Opposite words',
          text:`Opposite words for kids are a great way to help children learn vocabulary and encourage their natural curiosity about things they see each day. Let´s learn some adjetives!`,
          video: 'https://youtube.com/embed/sePUdTTbuZs',
          title1: `It is very important for kids to learn adjectives in English. With adjectives, your child can describe the world around them. As they learn about animals, try new foods, and go on adventures they will notice how things are different from each other. Learning opposite words in English can help your little one talk about the differences they see.`,
        }
    ]
    
  return (
    <div>
        {
            listWork.length && listWork.map((item,index) => {
                return <MainVideos dataVideos = {item} index = {index}/>
            })
        }
    </div>
  )
}
