import React from 'react'
import img from '../Food/1.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CardItem = () => {
    return (
        <div className='bg-transparent flex shadow-md gap-3 p-2'>
            <MdDelete className='absolute right-2 bg-transparent cursor-pointer' />
            <img className='rounded-full w-[50px] h-[50px] ' src={img} alt="" />
            <div className='bg-transparent leading-4 items-center justify-between'>
                <h1 className='bg-transparent'> Onion Pizza</h1>
                <div className='bg-transparent flex items-center justify-between'>
                    <span className='bg-transparent'>23</span>
                    <div className='bg-transparent flex items-center absolute right-2'>
                        <FaPlus className='bg-transparent cursor-pointer hover:bg-green-700 hover:sc110 duration-500 rounded-full hover:text-white' />
                        <span className='bg-transparent'>1</span>
                        <FaMinus className='bg-transparent cursor-pointer hover:bg-green-700 hover:sc110 duration-500 rounded-full hover:text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem