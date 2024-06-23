import React from 'react'
import FoodItem from '../Components/FoodItem'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
    </div>
  )
}

export default Home