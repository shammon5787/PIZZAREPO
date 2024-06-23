import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mt-[90px]'>
        <span className='text-slate-700 font-semibold text-2xl'>Order Your Favorite Pizza</span>
        <div className='flex gap-3 overflow-x-scroll lg:overflow-x-hidden'>
            <button className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>All</button>
            <button className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>DInner</button>
            <button className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>Breakfast</button>
            <button className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>Lunch</button>
        </div>
    </div>
  )
}

export default CategoryMenu