import React from 'react'
import RecipieCard from './RecipieCard/RecipieCard'

export default function Home() {

    const recipies = [
        {
            title: "Lasagna",
            img: "lasagna.webp",
            redirect:"recipies/lasagna"
        },
        {
            title: "Tsao Mi Fun",
            img: "tsao_mi_fun.webp",
            redirect:"recipies/tsao_mi_fun"
        },
        {
            title: "Yakisoba Chicken",
            img: "yakisoba_chicken.webp",
            redirect:"recipies/yakisoba_chicken"
        },
    ]

  return (
    <section className='flex flex-col md:flex-row items-center justify-evenly gap-2 m-2'>
        {recipies.map((recipie, index) => (
            <RecipieCard 
                title={recipie.title} 
                img={recipie.img}
                redirect={recipie.redirect}
                key={index}
            />
        ))}
    </section>
  )
}
