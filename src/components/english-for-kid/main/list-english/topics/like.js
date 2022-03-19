import React from 'react'
import {ListTopics} from './listTopics'
export const MainLike = () => {
    const listLike = [
        {
          contents:'Verb Like',
          text:`Learn more about the verb "like" to share more about your likes and dislikes in English, and improve your communication skills!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F252F132F112F572Fa757f46a-e62a-451b-9d95-28e42ec54c252FLike-Present-SimpleMesa-de-trabajo-1.png',
          title1: `Present Simple`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F252F132F112F562Fdb9053a4-ab7c-4783-a13b-10a4286a93d32FLike-Past-SimpleMesa-de-trabajo-1.png',
          title2: `Past`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F252F132F112F562F6c9bbc11-128f-4f9e-bbce-a5afeaf1b5022FLike-Future-SimpleMesa-de-trabajo-1.png',
          title3: `Future`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F252F132F112F572F7eba87fe-2c9a-4cbf-9dbf-9ad9102555662FLike-QuestionsMesa-de-trabajo-1.png',
          title4: `Questions `,
          
        }
    ]
    
  return (
    <div>
        {
            listLike.length && listLike.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
