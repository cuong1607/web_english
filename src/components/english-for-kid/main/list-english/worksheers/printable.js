import React from 'react'
import { MainWorkSheers } from './listWorksheers/mainWorksheers'
export const MainPrintable = () => {
    const listPrintable = [
        {
            name: 'Printable activities to learn colours',
            text: `Here you'll find a printable activities to practice colours with your children!`,
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/printablecolores.jpg',
            title1: `Printable activities are a great way to complement e-learning techniques since they put knowledge into practice.`,
            src2: 'https://i.pinimg.com/originals/79/d9/3e/79d93e6e3a068f7f207b42366162bf3b.jpg'
        }
    ]

    return (
        <div>
            {
                listPrintable.length && listPrintable.map((item, index) => {
                    return <MainWorkSheers dataWorkSheers={item} index={index} />
                })
            }
        </div>
    )
}
