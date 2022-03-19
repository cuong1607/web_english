import React from 'react'
import { Fake } from '../topics/fake'
export const WorkSheers = () => {

    const listWorkSheers = [
        {
            link1:'/english-for-kid/worksheets/numbers',
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/numbers-in-english-300x169.jpg',
            title1: `Numbers printable activities`,
            link2:'/english-for-kid/worksheets/printable',
            src2: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/printablecolores-300x200.jpg',
            title2: `Printable activities to learn colours`,
            link3:'/english-for-kid/worksheets/shapes',
            src3: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/FoodColoringPages-300x200.jpg',
            title3: `Shapes printable activities`,
            link4:'/english-for-kid/worksheets/toys',
            src4: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/toys-coloring-pages-300x200.jpg',
            title4: `Toys Coloring Pages`,
            link5:'/english-for-kid/worksheets/clothes',
            src5: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/printableclothing-300x200.jpg',
            title5: `Printable activities to learn clothes`,
            
            title10: `Worksheets`,
            content1: `When it comes to learning, it’s always beneficial to 
            have more than one approach or technique to make sure that children
             are getting the best of their education. That’s why worksheets and 
             printable activities are important: they reinforce all the knowledge 
             that children are getting through other types of learning activities. 
             In this section, you’ll find an assortment of English worksheets for kids you can use with your
             little ones to help them learn in a fun, natural way.`,
             title11: `English Worksheets for Kids`,
            content2: `Printable activities for kids represent a new challenge for them to overcome, whether it’s by coloring images or by tracing new words, this sort of exercises tend to be a fantastic way to improve different skills that will turn to be very helpful for children cognitive development. These skills are going to prove valuable during early childhood, as children learn to study and to understand how information is going to be taught at school, or how their syllabus work, and they will set the foundation for more advanced studies during college and university.

            But, what kind of activities should be included in a printable? Let’s consider that the main goal of this type of resources is to complement education and supplement what has been learned, so the content in them must be thoroughly selected according to the specific use it will have. When talking about worksheets to complement a lesson in English for children, it’s advisable for the material to be fun, easy to understand and entertaining. Some activities that could be included are word traceable, which help the little ones learn vocabulary, practice the one they’ve already acquired, and exercise their writing skills to make them better. It would also be an excellent idea to include coloring pages associated with the topic at hand. Let’s say that the topic is “face parts”, so, it would be helpful to include some images about face parts to color along with their names, this way children will have a chance to put their creativity to work while painting, and also they’ll start to make associations between the written words and the objects they represent.
            
            As children get older and their education continues to advance, the difficulty of the worksheets should also increase. For children learning a English as a second language, using worksheets can be a great medium for practicing abstract concepts that are a bit more difficult to grasp, such as: the use of different articles in front of nouns, learning complex vocabulary, going over the grammar for a particular lesson, learning how to spell a word, and learning to associate the sounds of some words to the way they’re written.`,
        }
    ]
  return (
    <div>
        {
            listWorkSheers.length && listWorkSheers.map((item, index) => {
                return <Fake dataTopic={item} index={index} />
            })
        }
    </div>
  )
}
