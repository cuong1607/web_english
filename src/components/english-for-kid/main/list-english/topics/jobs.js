import React from 'react'
import {ListTopics} from './listTopics'
export const MainJobs = () => {
    const listJobs = [
        {
          contents:'Animals',
          text:``,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F252F142F352F432Fa91f75ad-bc96-4404-ad1b-59eb7200424a2FDog02.png',
          title1: `Dog`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F072F562F082F2ca6c0cd-855b-4aff-87e2-6f3f04bea1a72FCat-Animalsname.png',
          title2: `Cat`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F072F232Ff0ad973d-00dd-411d-b36e-35d7752a6ac82FCow-Animalsname.png',
          title3: `Cow`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F442Ff51394b3-d6e1-4f57-a2ad-5c063aa7feb42FSheep-Animalsname.png',
          title4: `sheep`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F052F2fada3c8-a4f5-4887-a937-a29202ac3abc2FRabbit-Animalsname.png',
          title5: `rabbit`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F292F102F142F322F02209da4-11a2-4cd9-a602-8993749c161d2FDuck.png',
          title6: `duck`,
          src7: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F072F572F402F688f8da1-5c16-42d5-a02f-3462c2f086f12Fchicken-Animalsname.png',
          title7: `hen`,
          src8: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F112F222F812147c8-b578-4aaa-9180-ac737e86889c2FHorse-Animalsname.png',
          title8: `horse`,
          src9: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/chicken-tiny-png.jpg',
          title9: `chicken`,
          src10:'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shutterstock_519474715-removebg-preview-1.png',
          title10: `turkey`,
          src11:'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/donkey-tiny-png-300x242.png',
          title11: `donkey`,
          src11:'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/goat-tiny-pnh.png',
          title11: `goat`,
          src12:'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/pantherr.png',
          title12: `panther`,
        }
    ]
    
  return (
    <div>
        {
            listJobs.length && listJobs.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
