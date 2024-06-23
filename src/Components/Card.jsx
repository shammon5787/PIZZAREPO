import React from 'react'
import { IoClose } from "react-icons/io5";
import CardItem from './CardItem';

const Card = () => {
    return (
        <>
            <div className='bg-white fixed top-0 right-0 h-full w-full lg:w-[300px] p-2'>
                <div className='bg-transparent flex items-center justify-between'>
                    <span className='bg-transparent text-slate-700 font-semibold'>Your Order</span>
                    <IoClose className='bg-transparent font-semibold text-2xl cursor-pointer animate-pulse hover:animate-none' />
                </div>

                <CardItem />
                <CardItem />
                <CardItem />

                <div className='bg-transparent absolute bottom-0'>
                    <h1 className='bg-transparent text-slate-700'>Total Items: </h1>
                    <h1 className='bg-transparent text-slate-700'>Total Price: </h1>
                    <button className='mb-3 bg-blue-700 p-1 rounded-md text-white font-semibold w-[92vw] lg:w-[21vw]'>Check Out</button>
                </div>
            </div>
        </>
    )
}

export default Card