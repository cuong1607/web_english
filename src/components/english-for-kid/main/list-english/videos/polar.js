import React from 'react'
import { MainVideos } from './listVideos/mainVideos'
export const MainPolar = () => {
    const listPolar = [
        {
          name:'Polar animals names',
          text:`Let’s talk about arctic animals! Polar bear, penguin, seal, fox, hare... Watch the video and go a North Pole adventure with Teacher Meredith`,
          video: 'https://youtube.com/embed/GpZQfSnDzQs',
          title1: `Learning an animal’s name in English is a fun way for kids to talk about animals they like and to think about the natural world around them. As they learn more about natural environments, they will notice that animals live in different places. Some creatures live in the hot jungle and others can survive in the dry desert. But not every animal likes the heat! What about animals that live in the arctic? Let’s talk about arctic animals! For kids, this is a great introduction to other environments and different parts of the world!`,
        }
    ]
    
  return (
    <div>
        {
            listPolar.length && listPolar.map((item,index) => {
                return <MainVideos dataVideos = {item} index = {index}/>
            })
        }
    </div>
  )
}
