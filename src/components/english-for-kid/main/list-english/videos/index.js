import React from 'react'
import { Topics } from '../topics'
import { Fake } from '../topics/fake'
export const Videos = () => {
    const listVideos = [
        {
            link1:'/english-for-kid/videos/base',
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/basic-shapes-300x169.jpg',
            title1: `Basic shapes`,
            link2:'/english-for-kid/videos/work',
            src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/0513-Meredith-Opposites-300x169.png',
            title2: `Opposite words`,
            link3:'/english-for-kid/videos/polar',
            src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/0411-Polar-Animals-300x169.png',
            title3: `Polar animals names`,
            link4:'/english-for-kid/videos/medical',
            src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/numbers-in-english-300x169.jpg',
            title4: `Numbers from 1 to 10`,
            link5:'/english-for-kid/videos/food',
            src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/0422-Food-in-English-300x169.png',
            title5: `Food names`,
           
           
            title10: `Videos`,
            content1: ` Here you’ll find the best videos aimed for kids to learn English. Find out how to learn English in a fun and entertaining way, and get to know new words to widen your children’s vocabulary. The videos in this section are about topics as varied as the alphabet, colors, shapes, and much more. Also, you’ll find a myriad of subjects that will help your little one learn English easy and effectively.
    
            Audiovisual content could be very beneficial for the little ones when used responsibly. It will help them learn about different topics as they are paying attention to what’s happening on screens. Children have a special liking for moving images, and parents should take this as an advantage and monitor the use that the little ones are giving to electronic devices, and also check the video content they’re watching.
            
            Especially when learning a new language, videos can be a great support system to help the little ones acquire more vocabulary, and also to help them learn new letter sounds that doesn’t exist on their main language. Here you’ll find a great selection of videos in English for kids organized by theme so you can help your little one learn in a safe and easy way. 
            
            You can also visit the Songs in English for kids section so you can also enjoy singing and dancing with Lingokids’ characters!
            
            Are you ready to meet our teacher Meredith and go on several adventures?
            
            Let’s hit play! `,
            
        }
    ]

  return (
    <div>
            {
                listVideos.length && listVideos.map((item, index) => {
                    return <Fake dataTopic={item} index= {index} />
                })
            }
    </div>
  )
}
