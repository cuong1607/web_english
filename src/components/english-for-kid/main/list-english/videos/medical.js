import React from 'react'
import { MainVideos } from './listVideos/mainVideos'
export const MainMedical = () => {
    const listMedical = [
        {
          name:'Numbers from 1 to 10',
          text:`Numbers are some of the most useful English words we can learn. Let’s help Teacher Meredith count bananas!`,
          video: 'https://youtube.com/embed/s5-0V8wIbxw',
          title1: `One, two, three, four! Let’s count some more! Learning numbers is an important way for kids to develop the math skills they will need later in life. Numbers hold lots of meanings and can tell us the size, temperature, weight, height, age, and many more facts about the world around us. But first, let’s start with counting!`,
        }
    ]
    
  return (
    <div>
        {
            listMedical.length && listMedical.map((item,index) => {
                return <MainVideos dataVideos = {item} index = {index}/>
            })
        }
    </div>
  )
}
