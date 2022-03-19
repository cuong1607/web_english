import React from 'react'
import { MainWorkSheers } from './listWorksheers/mainWorksheers'
export const MainClothes = () => {
    const listClothes = [
        {
            name: 'Printable activities to learn clothes',
            text: `Learning clothes vocabulary is a great way to have fun as a family. Here you'll find printable activities to practice this topic with your children!`,
            src1: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/04/printableclothing.jpg',
            title1: `Printable activities for kids are a great way to put knowledge into practice, as kids learn they need to work on their spelling to get better at writing and communicating their ideas.`,
            src2: 'https://en.islcollective.com/preview/201803/f/clothes-memory-game-flashcards-fun-activities-games-games_105572_5.jpg'
        }
    ]

    return (
        <div>
            {
                listClothes.length && listClothes.map((item, index) => {
                    return <MainWorkSheers dataWorkSheers={item} index={index} />
                })
            }
        </div>
    )
}
