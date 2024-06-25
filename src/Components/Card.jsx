import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

const Card = () => {

    const cartItem = useSelector((state)=>state.cart.cart)

    const [activeCard, setactiveCard] = useState(true)

    const totalQty = cartItem.reduce((totalQty , items)=>totalQty + items.qty, 0);
    const totalprice = cartItem.reduce((total , item)=>total + item.qty * item.price, 0);

    return (
        <>
            <div className={`bg-white fixed top-0 right-0 h-full w-full lg:w-[300px] p-2 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='bg-transparent flex items-center justify-between'>
                    <span className='bg-transparent text-slate-700 font-semibold'>Your Order</span>
                    <IoClose onClick={()=>setactiveCard(!activeCard)} className='bg-transparent font-semibold text-2xl cursor-pointer animate-pulse hover:animate-none transition-all duration-500' />
                </div>
                {
                   cartItem.length > 0 ? cartItem.map((food)=>(
                        <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} desc = {food.desc}qty = {food.qty} price={food.price}  />
                    )) : <h2 className='bg-transparent text-3xl font-semibold shadow-inner'>No Item Selected</h2>
                }

                <div className='bg-transparent absolute bottom-0'>
                    <h1 className='bg-transparent text-slate-700'>Total Items: {totalQty} </h1>
                    <h1 className='bg-transparent text-slate-700'>Total Price: {totalprice} </h1>
                    <button className='mb-3 bg-blue-700 p-1 rounded-md text-white font-semibold w-[92vw] lg:w-[21vw]'>Check Out</button>
                </div>
            </div>

            <FaCartShopping onClick={()=>setactiveCard(!activeCard)} className={`fixed bottom-4 right-10 cursor-pointer text-3xl rounded-full  ${cartItem.length > 0 ? "animate-bounce" : " animate-none"} items-center justify-center p-2 bg-green-700 hover:animate-none `} />
        </>
    )
}

export default Card