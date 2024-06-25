import React, { useState } from 'react'
import img from '../Food/1.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, image,price, desc, qty}) => {
    const dispatch = useDispatch()


    return (
        <div className='bg-transparent flex shadow-md gap-3 p-2'>
            <MdDelete onClick={()=>dispatch(remove({id})) } className='absolute right-2 bg-transparent cursor-pointer' />
            <img className='rounded-full w-[50px] h-[50px] ' src={image} alt="" />
            <div className='bg-transparent leading-4 items-center justify-between'>
                <h1 className='bg-transparent'> {name}</h1>
                <div className='bg-transparent flex items-center justify-between'>
                    <span className='bg-transparent'>{price}</span>
                    <div className='bg-transparent flex items-center absolute right-2'>
                        <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 0} className='bg-transparent cursor-pointer hover:bg-green-700 hover:sc110 duration-500 rounded-full hover:text-white' />
                        <span className='bg-transparent'>{qty}</span>
                        <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='bg-transparent cursor-pointer hover:bg-green-700 hover:sc110 duration-500 rounded-full hover:text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem