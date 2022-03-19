import React from 'react'
import {ListTopics} from './listTopics'
export const MainAdverbs = () => {
    const listAdverbs = [
        {
          contents:'Adverbs',
          text:`Adverbs help us describe, change or add more information about a verb in a sentence. Learn more about their characteristics and uses with lots of examples!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/ezgif.com-video-to-gif-18.gif',
          title1: `teeth`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/cowy_school_0585-1-300x169.png',
          title2: `school`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/ELLIOT_Running_01.gif',
          title3: `runs `,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/BILLY_Welding_01.gif',
          title4: `sheep`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/Cowy3-1-1-300x197.png',
          title5: `sweet`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F292F102F142F322F02209da4-11a2-4cd9-a602-8993749c161d2FDuck.png',
          title6: `rabbit`,
         
        }
    ]
    
  return (
    <div>
        {
            listAdverbs.length && listAdverbs.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
