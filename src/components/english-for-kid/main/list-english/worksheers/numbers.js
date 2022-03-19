import React from 'react'
import { MainWorkSheers } from './listWorksheers/mainWorksheers'
export const MainNumBers = () => {
    const listNumber = [
        {
            name: 'Numbers printable activities',
            text: `Check out these printable activities to practice the numbers from 1 to 10 and from 10 to 20 in English!`,
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/printablenumeros.jpg',
            title1: `Printable activities are a great way for children to put their creativity intro practice. They help the little ones learn different topics in a natural way while using a more practical approach. For topics such as the numbers for kids, which usually require memorization and writing skills, written exercises allow children to grasp the concept of numbers as they take the first steps to learn how to write them and how to read them. In these numbers printable activities, you’ll find two worksheets that will help your little one learn the numbers in English.`,
            src2: 'https://idvielts.com/wp-content/uploads/2020/03/NUMBER.jpg'
        }
    ]

    return (
        <div>
            {
                listNumber.length && listNumber.map((item, index) => {
                    return <MainWorkSheers dataWorkSheers={item} index={index} />
                })
            }
        </div>
    )
}
