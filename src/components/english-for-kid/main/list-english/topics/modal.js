import React from 'react'
import {ListTopics} from './listTopics'
export const MainModal = () => {
    const listModal = [
        {
          contents:'Numbers',
          text:`Learning the numbers is an important step in children's education. Here you'll find different activities to help them learn in a fun way!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262Fe2cc85b9-365d-4bd2-9a6c-cd0227180d6b2F0.png',
          title1: `0 – zero`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262F9160b53e-1e8a-41fd-9622-ed70f4997c9c2F1.png',
          title2: `1 – one`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262F7219b0ae-3a11-4bf6-8600-1e3ee20e58072F2.png',
          title3: `2 – two`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262F90b3a955-e043-402f-826d-bad4afc4ec8b2F3.png',
          title4: `3 – three`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262F9566f92b-fc65-4b70-9b63-313144d70d942F4.png',
          title5: `4 – four`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F152F132F132F262F042a44db-470f-4f68-b77d-0633ac1af8612F5.png',
          title6: `5 – five`,
         
        }
    ]
    
  return (
    <div>
        {
            listModal.length && listModal.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
