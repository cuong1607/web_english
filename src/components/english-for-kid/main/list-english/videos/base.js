import React from 'react'
import { MainVideos } from './listVideos/mainVideos'
export const MainBase = () => {
    const listBase = [
        {
          name:'Basic shapes',
          text:`Learning shapes is great for cognitive development. As kids learn basic shapes, they also learn to look at the world around them more closely. Let’s go to a birthday party with Cowy and her friends to learn about shapes!`,
          video: 'https://youtube.com/embed/VUiyR66H93I',
          title1: `What are some great vocabulary words to teach a young English learner? Why, shape’s names, of course! Learning shapes is great for cognitive development, as it helps children recognize numbers, letters, and other characteristics of objects.`,
        }
    ]
    
  return (
    <div>
        {
            listBase.length && listBase.map((item,index) => {
                return <MainVideos dataVideos = {item} index = {index}/>
            })
        }
    </div>
  )
}
