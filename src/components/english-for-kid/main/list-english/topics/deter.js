import React from 'react'
import {ListTopics} from './listTopics'
export const MainDeter = () => {
    const listDeter = [
        {
          contents:'Determiners',
          text:`Determiners are very important words that modify nouns and phrases to enrich their meanings. Learn all about the different types there are and their uses!`,
          src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F062F80e27ff2-4754-42ec-80a1-0faef52578ac2FNumbers.png',
          title1: `Number`,
          src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F072Fedfe52ca-221f-4b30-aa2d-0d8b35a76f2d2FPredeterminers.png',
          title2: `Pre`,
          src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F052F15f11512-4429-44ca-9923-a0e3fdfb57222FArticles.png',
          title3: `Articles`,
          src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F052F0293cacc-ed82-4414-9d02-d767b1dfacfd2FDemonstratives.png',
          title4: `Demonstra`,
          src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F072F7b8a56b3-990a-4c94-ab5f-28fbe83ba2352FPossessives.png',
          title5: `Possessives`,
          src6: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F102F112F102F432F072F74097023-ca9c-441b-98f3-328168eaa6d42FQuantifiers.png',
          title6: `Quantifiers`,
          
        }
    ]
    
  return (
    <div>
        {
            listDeter.length && listDeter.map((item,index) => {
                return <ListTopics dataAnimal = {item} index = {index}/>
            })
        }
    </div>
  )
}
