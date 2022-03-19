import React from 'react'
import './style.css'
import { List4c } from './list4c'

export default function Main() {

    const listTitle = [
        {
            title1: `Communication`,
            video: "https://youtube.com/embed/GjN29uXPoc4",
            title2: `Little ones, let’s talk it out! PlayLearning™ helps kids use their words.`,
            title3: `In this game, we build sentences just like Billy builds robots ⚙️ the fun way! `,
            title4: `Get ready to learn new words, practice pronunciation, and create unique sentences.`,
        },
        {
            title1: `Critical thinking`,
            title2: `Who? What? When? Where? Why? Your tiny investigator will be asking the important questions in no time.`,
            title3: `⬆️ Up, ⬇️ down, ⬅️ left, or ➡️ right? Elliot has trouble thinking logically when he’s hungry… So he needs help finding his snacks 🍪! `,
            title4: `Can your child give him the right directions?`,
            video: "https://youtube.com/embed/QGXIfVxPPqg",
        },
        {
            title1: `Communication`,
            video: "https://youtube.com/embed/SEcxBrReFEc",
            title2: `Little ones, let’s talk it out! PlayLearning™ helps kids use their words.`,
            title3: `In this game, we build sentences just like Billy builds robots ⚙️ the fun way! `,
            title4: `Get ready to learn new words, practice pronunciation, and create unique sentences.`,
        },
        {
            title1: `Critical thinking`,
            title2: `Who? What? When? Where? Why? Your tiny investigator will be asking the important questions in no time.`,
            title3: `⬆️ Up, ⬇️ down, ⬅️ left, or ➡️ right? Elliot has trouble thinking logically when he’s hungry… So he needs help finding his snacks 🍪! `,
            title4: `Can your child give him the right directions?`,
            video: "https://youtube.com/embed/O5VXShoCQSI",
        },
    ]

  return (
    <div className='main'>
            <div className='main--background'>
                <div className='main--background--content'>
                    <h1 className='main--background--content__title1'>Learn through play. Let’s play learn!</h1>
                    <h4 className='main--background--content__title2'>When learning is fun, kids love to learn.</h4>
                </div>
                <img className='main--background--img' src='https://wp-cdn.lingokids.com/wp-content/uploads/elementor/thumbs/side-image-girl-playlearn@2x-1-oxk4p4hcwie3qzbst1k2u98k62iuol1qjom4pyf3r4.png'></img>
            </div>
        <div className='main--advantage'>
            <h2 className='main--advantage--learning'>Advantages of learning through
            <br />
             play, play learning™</h2>
            <ul className='main--advantage--list'>
                <div>
                    <li className='main-advantage--list--name'>
                    <i class="fa-regular fa-circle-check"></i>Kids' motivation increases when they're having fun</li>
                    <li className='main-advantage--list--name'>
                    <i class="fa-regular fa-circle-check"></i>Kids stay engaged and are less afraid to make mistakes</li>
                </div>
                <div>
                    <li className='main-advantage--list--name'>
                    <i class="fa-regular fa-circle-check"></i>Children develop motivation and concentration when involved in entertaining activities</li>
                    <li className='main-advantage--list--name'>
                    <i class="fa-regular fa-circle-check"></i>Play nurtures the imagination and gives kids a sense of adventure</li>
                </div>
            </ul>
            <div className='main--advantage--video'>
                <h2 className='main--advantage--video--title1'>The power of play</h2>
                <h4 className='main--advantage--video--title2'>PlayLearning™ helps your child discover their natural superpowers. These are the skills they'll develop:</h4>
                <iframe className='main--advantage--video--play' src="https://youtube.com/embed/mGCsUzhPAHE"></iframe>
            </div>
        </div>

        <div className='main--list4c'>
            <h1 className='main--list4c--content'>What are the 4C's?</h1>
           {
                listTitle.length && listTitle.map((item,index) => {
                    return <List4c dataList4c={item} index={index} key={index} />
                })
           }
        </div>
    </div>
  )
}
