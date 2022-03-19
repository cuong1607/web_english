import React from 'react'
import { MainVideos } from './listVideos/mainVideos'
export const MainFood = () => {
    const listFood = [
        {
          name:'Food names',
          text:`In this video, Teacher Meredith is in the kitchen making a dinner for her friends. What’s in the dish? Teacher Meredith cooks a dish with tomatoes, broccoli, shrimp, and a mushroom! Let´s play!`,
          video: 'https://youtube.com/embed/MefQ5yEjVL8',
          title1: `Is your little one hungry for something to eat? Let’s learn about food! Everyone has a favorite food. Does your child know how to talk about their favorite food in English? As your kids get older, they can start to help out in the kitchen!`,
        }
    ]
    
  return (
    <div>
        {
            listFood.length && listFood.map((item,index) => {
                return <MainVideos dataVideos = {item} index = {index}/>
            })
        }
    </div>
  )
}
