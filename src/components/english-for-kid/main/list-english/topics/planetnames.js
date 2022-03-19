import React from 'react'
import {ListTopics} from './listTopics'
export const MainPlanetName = () => {
    const listPlanetName = [
        {
          contents:'Planet Names',
          text:`Learning the planet names can be the start of a fun adventure in a child's education. Have fun learning all about planets, the Solar System, and the universe in English!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656-removebg-preview-300x292.png',
          title1: `Mercury`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656__1_-removebg-preview-300x256.png',
          title2: `Venus`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656__4_-removebg-preview-300x300.png',
          title3: `Earth`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656__3_-removebg-preview-279x300.png',
          title4: `Mars`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656__5_-removebg-preview-297x300.png',
          title5: `Jupiter`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_1129245656__6_-removebg-preview-293x300.png',
          title6: `Saturn`,
         
        }
    ]
    
  return (
    <div>
        {
            listPlanetName.length && listPlanetName.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
