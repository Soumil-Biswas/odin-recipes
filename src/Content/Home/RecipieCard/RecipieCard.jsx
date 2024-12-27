import { Link } from "react-router-dom"

export default function RecipieCard({img, title, redirect}) {
  return (
    <Link to={redirect} className='w-full md:w-[350px] p-3 bg-[--highlight-color] rounded-2xl flex flex-col hover:bg-[--highlight-color-offset] duration-300 hover:-translate-y-2'>
        <img src={img} alt={title} className='rounded-xl object-cover'/>
        <h1 className='font-bold mt-2 ml-2'>{title}</h1>        
    </Link>
  )
}
