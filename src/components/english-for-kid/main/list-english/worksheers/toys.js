import React from 'react'
import { MainWorkSheers } from './listWorksheers/mainWorksheers'
export const MainToys = () => {
    const listToys = [
        {
            name: 'Toys Coloring Pages',
            text: `Make the best out of your playtime with these coloring pages about toys!`,
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/toys-coloring-pages-768x512.jpg',
            title1: `What’s your child favorite toy? Whether is a bicycle or a doll, toys and playtime are great for children’s overall development. With these toys coloring pages, your little one will have fun while learning about one of their most liked activities!`,
            src2: 'https://i.ytimg.com/vi/1HDdJKG2TTs/maxresdefault.jpg'
        }
    ]

    return (
        <div>
            {
                listToys.length && listToys.map((item, index) => {
                    return <MainWorkSheers dataWorkSheers={item} index={index} />
                })
            }
        </div>
    )
}
