import React from 'react'
import {ListTopics} from './listTopics'
export const MainAnimal = () => {
    const listAnimal = [
        {
          contents:'Animals',
          text:`Learning the names of the animals can be quite beneficial for young children. Here you'll find a list of animal names in English and also lots of activities to help your little ones learn about the animals.`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F252F142F352F432Fa91f75ad-bc96-4404-ad1b-59eb7200424a2FDog02.png',
          title1: `dog`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F072F562F082F2ca6c0cd-855b-4aff-87e2-6f3f04bea1a72FCat-Animalsname.png',
          title2: `cat`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F072F232Ff0ad973d-00dd-411d-b36e-35d7752a6ac82FCow-Animalsname.png',
          title3: `cow`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F442Ff51394b3-d6e1-4f57-a2ad-5c063aa7feb42FSheep-Animalsname.png',
          title4: `sheep`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F082F152F052F2fada3c8-a4f5-4887-a937-a29202ac3abc2FRabbit-Animalsname.png',
          title5: `rabbit`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F092F142F072F572F402F688f8da1-5c16-42d5-a02f-3462c2f086f12Fchicken-Animalsname.png',
          title6: `hen`,
          
        }
    ]
    
  return (
    <div>
        {
            listAnimal.length && listAnimal.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
