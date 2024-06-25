import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice';


const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <div>
            <h1 className='text-2xl font-bold text-slate-700' > {new Date().toUTCString().slice(0,22)} </h1>
            <span className='text-2xl font-bold text-slate-700' >PIZZA CENTER GILGIT</span>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='mx-1 my-3 p-2 md:w-[300px] border outline-none bg-slate-50 rounded-md ' type="search" id='' name='search' placeholder='search here' />
    </div>
  )
}

export default Navbar