import React from 'react'
import {ListTopics} from './listTopics'
export const MainVerb = () => {
    const listVerb = [
        {
          contents:'Verb Can',
          text:`The verb "can" is one of the most used in English, it refers to about ability and possibility, and has many different uses. Learn more about this modal verb in English!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F092F112F142F232F402F1b4505db-16e7-473f-b555-7dbca71f9cf82Fverb-can-present-Mesa-de-trabajo-1.png',
          title1: `present`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F092F112F142F232F402Fde89f334-5afb-45aa-96bb-51423e36a1ea2Fverb-to-have-past-auxMesa-de-trabajo-1.png',
          title2: `past `,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/pay_ball-1.png',
          title3: `Ex: Rick can play with the ball.`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F442Ff51394b3-d6e1-4f57-a2ad-5c063aa7feb42FSheep-Animalsname.png',
          title4: `sheep`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F052F2fada3c8-a4f5-4887-a937-a29202ac3abc2FRabbit-Animalsname.png',
          title5: `rabbit`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F292F102F142F322F02209da4-11a2-4cd9-a602-8993749c161d2FDuck.png',
          title6: `duck`,
          
        }
    ]
    
  return (
    <div>
        {
            listVerb.length && listVerb.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
