import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
  const [categories, setcategories] = useState([])

  const ListUniqueCategories = ()=>{
    const uniqueCategories = [... new Set(FoodData.map((food)=>food.category))]
    setcategories(uniqueCategories);
  }

useEffect(() => {
  ListUniqueCategories();
}, [])

const dispatch = useDispatch()

const selectedCategory = useSelector((state)=>state.category.category)

  return (
    <div className='mt-[90px]'>
        <span className='text-slate-700 font-semibold text-2xl'>Order Your Favorite Pizza</span>
        <div className='flex gap-3 overflow-x-scroll lg:overflow-x-hidden'>

        <button onClick={()=>dispatch(addCategory("All"))} className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>All</button>
           
            {
              categories.map((category, index)=>{
                return (
                  <button onClick={()=>dispatch(addCategory(category))} key={index} className='px-2 bg-blue-700 rounded-sm text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-500'>{category}</button>
                )
              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu