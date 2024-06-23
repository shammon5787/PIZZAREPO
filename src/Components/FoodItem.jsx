import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {
  const [foodData, setfoodData] = useState(FoodData)
  return (
    <div className='pt-10 flex flex-wrap gap-3 items-center justify-center lg:justify-between'>
      {
        foodData.map((food)=>(
          <FoodCard key={food.id} id = {food.id} name = {food.name} image = {food.image} desc = {food.desc} rating = {food.ratting} />
        ))
      }
    </div>
  )
}

export default FoodItem