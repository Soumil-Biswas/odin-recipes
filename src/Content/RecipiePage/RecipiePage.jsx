import React from 'react'
import { useParams } from "react-router-dom";
import recipies from './Recipies';

export default function RecipiePage() {
    const { recipieID } = useParams();
    console.log(recipieID);
    const recipie = recipies[recipieID];
    console.log(recipie);
  return (
    <div className="flex justify-center">        
        <div className='flex flex-col p-10 max-w-[1000px]'>
            <h1 className='text-4xl font-bold'>{recipie.title}</h1>
            <img src={recipie.img} alt={recipie.title} className='w-full rounded-3xl my-5'/>
            <p className='font-semibold my-5'>{recipie.description}</p>
            <h2 className='text-4xl font-bold mb-5'>Ingredients:</h2>
            <ul>
                {recipie.ingredients.map((ingredient, index) => (
                    <li className='my-3 ml-5' key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className='text-4xl font-bold mb-5'>Steps:</h2>
            <ol className='list-decimal mb-3'>
                {recipie.steps.map((step, index) => (
                    <li className='my-3' key={index}>{step}</li>
                ))}
            </ol>        
        </div>
    </div>
  )
}
