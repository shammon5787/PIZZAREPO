import React from 'react'
import img from '../Food/1.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, desc,price, rating}) => {

    const dispatch = useDispatch()

    return (
        <div className='bg-white w-[250px] h-auto p-2 '>
            <div className='flex items-center justify-center bg-transparent'>
                <img className='w-[100px] h-[90px] rounded-full cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='flex items-center justify-between bg-transparent'>
                <h1 className='bg-transparent text-slate-700 font-semibold' >{name}</h1>
                <h1 className='bg-transparent text-slate-700 font-semibold' >$: {price}</h1>
            </div>
            <p className='bg-transparent'> {desc} </p>
            <div className='bg-transparent flex items-center justify-between'>
                <span className='bg-transparent flex items-center gap-2'>  <MdOutlineStar className='bg-transparent text-yellow-500 text-xl' /> 
                <h1 className='bg-transparent text-slate-700 font-semibold'>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(add({id, name, image, price, desc, rating, qty : 1} ))} className='bg-blue-700 p-1 rounded-md font-semibold text-white'>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard