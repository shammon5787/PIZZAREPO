import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {
  const [foodData, setfoodData] = useState(FoodData)
  return (
    <div className='pt-10 flex flex-wrap gap-3 items-center justify-center lg:justify-between'>
      {
        foodData.map((food)=>(
          <FoodCard key={food.id} />
        ))
      }
    </div>
  )
}

export default FoodItem