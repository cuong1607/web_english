import React from 'react'
import { MainWorkSheers } from './listWorksheers/mainWorksheers'
export const MainShapes = () => {
    const listShapes = [
        {
            name: 'Shapes printable activities',
            text: `Here you'll find printable activities to practice the shapes with your children!`,
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/shapes.jpg',
            title1: `Learning shapes through printable exercises is a great idea. After learning about them, kids have the opportunity to put all that knowledge into practice by remembering the shapes visually and also writing their names.`,
            src2: 'https://superstarworksheets.com/wp-content/uploads/2020/09/TracingWorksheets.jpg'
        }
    ]

    return (
        <div>
            {
                listShapes.length && listShapes.map((item, index) => {
                    return <MainWorkSheers dataWorkSheers={item} index={index} />
                })
            }
        </div>
    )
}
