import React from 'react'
import { Container, Content } from './content'
import './style.css'
export default function Main() {
  const listContainer = [
    {
      src: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/03/feature-03@2x-300x292.png",
      title1: `PlayLearning™:`,
      title2: `The learning that happens naturally while playing with the Lingokids app`,
      title3: `Enjoy 700+ games, video lessons, and audiobooks`,
      title4: `Sing educational and fun songs and chants`,
      title5: `Playlearn as a family with our Play Together games`,
    },

    {
      title1: `100% safe for children`,
      title2: `Our program is ad-free and kidSAFE certified`,
      title3: `Content from Oxford University Press`,
      title4: `All activities are teacher-approved`,
      title5: `Kid-friendly navigation lets children play by themselves`,
      src: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/07/feature02_newscreen_2-1-300x300.png"
    },

    {
      src: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/02/feature-01@2x-300x297.png",
      title1: `An early learning app for kids`,
      title2: `Perfect for kids ages 2-8`,
      title3: `Play on any mobile device`,
      title4: `Download games and play offline`,
      title5: `Up to 4 child profiles in one account`,
    },

    {
      title1: `Parents Area to the rescue!`,
      title2: `See what your child is learning and practice together`,
      title3: `Keep track of words learned and see if they’ve reached their weekly goal`,
      title4: `Engage with other families in our Parents Community`,
      title5: `Set up practice reminders to keep your child on track`,
      src: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/03/feature-04@2x-300x300.png"
    },

    {
      src: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/02/feature-05@2x-296x300.png",
      title1: `Early learning and beyond`,
      title2: `21st-century skills help your child thrive!`,
      title3: `Communication`,
      title4: `Critical Thinking`,
      title5: `Creativity`,
    }
  ]

  const listContent = [
    {
      h2: `BEST APP FOR KIDS`,
      link: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/03/testimonial1.png",
      text: `“We subscribed to Lingokids for our little daughter before she started Pre-K and was amazed by the results! She is very far ahead amongst her peers in grasping concepts and in her learning in general. Lingokids has continued to evolve for her and keeps her extremely engaged.
      It’s basically digital school, outside school. We love it!”`,
    },
    {
      h2: `THANK YOU SO MUCH!`,
      link: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/03/testimonial2.png",
      text: `“This app enabled my 2 and 4-year-old kids to learn basic counting, reading and writing skills in an easy and funny way, I am very grateful, for I got great help from you guys. (…) 
      We tried many Apps, but better than Lingokids bu far we really couldn’t find. Thank you so much!”`
    },
    {
      h2: `WONDERFUL FOR TEACHING ENGLISH!`,
      link: "https://wp-cdn.lingokids.com/wp-content/uploads/2020/03/testimonial3.png",
      text: `“Lingokids has helped my little girl since 18 months old to speak more words in English and express her feelings and emotions! I highly recommend it for any kid that needs extra help in English.
       Thanks Lingokids for helping my little girl!”`
    }
  ]

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-container-welcome'>
          <span className='main-container-welcome-text'>Welcome to the adventure of PlayLearning™</span>
          <div className='main-container-welcome-rate'>
            <span className='main-container-rate'>Rated
              <i class="rate fa-solid fa-star"></i>
              <i class="rate fa-solid fa-star"></i>
              <i class="rate fa-solid fa-star"></i>
              <i class="rate fa-solid fa-star"></i>
              <i class="rate fa-solid fa-star"></i>
              by 90k+ families
            </span>
          </div>
        </div>
        <div>
          <img className='main-container-img' src='https://wp-cdn.lingokids.com/wp-content/uploads/elementor/thumbs/hero-image@2x-1-oxk2gmkxma73h695uqx9t2igr5a8hqh9t9c65vrsxy.jpg'></img>
          <a className='main-container-btn'>
            <i class="btn-play fa-regular fa-circle-play"></i>
          </a>
        </div>
      </div>

      {
        listContainer.length && listContainer.map((item, index) => {
          return <Container dataContainer={item} index={index} key={index} />
        })
      }

      <div className='main-companion'>
        <h1 className='main-companion-content'>Safe & Certified Learning</h1>
        <div className='main-companion-content-name'>
          <span className='main-companion-content-name-icon'><i class="fa-regular fa-circle-check"></i>ALL GAMES TEACHER-APPROVED</span>
          <span className='main-companion-content-name-icon'><i class="fa-regular fa-circle-check"></i> NO ADS</span>
          <span className='main-companion-content-name-icon'><i class="fa-regular fa-circle-check"></i>SAFE FOR KIDS</span>
        </div>
        <div className='main-companion-img'>
          <img src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/09/enlighted-13a02c2a1f3a2dd6d4728232c0074012af9c5058576523dd0ccb961a6c5bab95.png'></img>
          <img src='https://www.kidsafeseal.com/sealimage/16349088981557338437/lingokidsenglish_app_large_darktm.png'></img>
          <img src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/09/hacker-71f0133e9b8aa1f4e373ad94118de0f49696d97e1cab04411fe2a71e9bf27b2b.png'></img>

        </div>
        <div className='main-companion-img'>
          <img src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/09/ptpa-7be4cb233c13f70f5e538b726982cb14f886a226b2fdb73bb3cc815844f70959.png'></img>
          <img src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/09/educational-22e2f26a1d82505b028e30ac5c8df45ced8640eda8e349089b1670d86a5ee598.png'></img>
          <img src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/09/momschoice-d5c26dc52c50be99bd4de7c5085f9519fea6b33cb4ccc18ae11abe4cd7bc7afa.png'></img>
        </div>
      </div>

      <div className='main-saying'>
        <h1 className='main-saying-name'>What grown-ups are
        <br />
        saying
        </h1>
        <div className='main-saying-container'>
            {
              listContent.length && listContent.map((item, index) => {
                return <Content data={item} key={index} />
              })
            }
        </div>
      </div>

      {/* <div className='main-start_now'>
          <img className='main-start_now-img' src='https://wp-cdn.lingokids.com/wp-content/uploads/elementor/thumbs/personalize-image@2x-oxk2znt7oqsmheqs5njk988xykgmnodqcp94jh03xc.png'></img>
          <div className='main-start_now-block'>
            <h2 className='main-start_now-title'>Set up your child's personalized program now</h2>
            <p className='main-start_now-titleChild'>It only takes a minute!</p>
            <a className='main-start_now-btnStart'>Start Now</a>
          </div>
      </div> */}
      <div className='main-bottom'>
        <img className='main-bottom-img' src='https://wp-cdn.lingokids.com/wp-content/uploads/2020/07/footer-lingokids-1-1024x346.png'></img>
      </div>
      
    </div>
  )
}
