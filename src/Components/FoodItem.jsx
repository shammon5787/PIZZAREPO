import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'
import { useSelector } from 'react-redux'
import SearchSlice, { addSearch } from '../Store/SearchSlice.jsx'

const FoodItem = () => {
  const [foodData, setfoodData] = useState(FoodData)

  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)

  return (
    <div className='pt-10 flex flex-wrap gap-3 items-center justify-center lg:justify-between'>
      {
       FoodData.filter((food)=>{
        if(category === "All"){
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else{
         return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
        }
       }).map((food)=>(
        <FoodCard key={food.id} id = {food.id} name = {food.name} image = {food.image} desc = {food.desc} rating = {food.ratting} price={food.price} />
       ))
      }
    </div>
  )
}

export default FoodItem