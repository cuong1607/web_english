import React from 'react'
import { Fake } from './fake'

export default function List() {

  const listTopic = [
    {
      link1: '/english-for-kid/topics/animals',
      src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/Animals.png',
      title1: `Animals`,
      link2: '/english-for-kid/topics/planet',
      src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/OuterSpace-300x300.png',
      title2: `Planet Names`,
      link3: '/english-for-kid/topics/adverbs',
      src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/adverb-300x300.png',
      title3: `Adverbs`,
      link4: '/english-for-kid/topics/deter',
      src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/Can-300x300.png',
      title4: `Verb Can`,
      link5: '/english-for-kid/topics/modal',
      src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/Modal-Verbs-300x300.png',
      title5: `Number`,
     
      title10: `Topics`,
      content1: ` What’s your biggest motivation for learning a new language?
                  It could be for work, travel or just for pleasure. However, it’s known that the world is a big place, with lots of people from many different cultures who speak a variety of languages, and day after day all these people are more connected than before.
                  One of the main things that allow this flow of communication to happen is speaking the same language: English.
                  Learning English has become one of the main objectives for a majority of the population around the world,
                  and it’s a fact that the sooner a person starts learning this language,
                  the overall proficiency in it becomes much better. This is why parents and teachers
                  all over the world are focused on providing the best education for their children,
                  this way they can make sure they learn English as a second language properly.
                  The opportunities that come with speaking English as a second language as adults are many,
                  it helps people bypass the language barriers, allowing them to get access to a variety of
                  careers and studies that would otherwise be unattainable,
                  and also, it helps them communicate efficiently in both work and leisure environments.`,

      title11: `What’s the best way to learn English for Kids?`,

      content2: `For children, learning a new language can be challenging,
                especially a second one, since they’re still getting to know their main tongue.
                However, it’s beneficial for the little ones that the language learning process happens
                as naturally as possible, since this is the perfect way to make sure they remember
                all the new vocabulary about the several topics in English they learn, and more importantly,
                that they know how to use these new words in the right context.`
    }
  ]
  return (
    <div>
      {
        listTopic.length && listTopic.map((item, index) => {
          return <Fake dataTopic={item} index={index} />
        })
      }
    </div>


  )
}
