import React from 'react'
import img from '../Food/1.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = () => {
    return (
        <div className='bg-white w-[250px] h-auto p-2 '>
            <div className='flex items-center justify-center bg-transparent'>
                <img className='w-[100px] h-[90px] rounded-full' src={img} alt="" />
            </div>
            <div className='flex items-center justify-between bg-transparent'>
                <h1 className='bg-transparent text-slate-700 font-semibold' >Pizza Food</h1>
                <h1 className='bg-transparent text-slate-700 font-semibold' >$: 23</h1>
            </div>
            <p className='bg-transparent'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint provident amet.
            </p>
            <div className='bg-transparent flex items-center justify-between'>
                <span className='bg-transparent flex items-center gap-2'>  <MdOutlineStar className='bg-transparent text-yellow-500 text-xl' /> 
                <h1 className='bg-transparent text-slate-700 font-semibold'>4</h1>
                </span>
                <button className='bg-blue-700 p-1 rounded-md font-semibold text-white'>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard