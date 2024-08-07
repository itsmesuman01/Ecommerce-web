import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProduct from '../../components/ExploreProduct/ExploreProduct'
import SubProductDisplay from '../../components/SubProductDisplay/SubProductDisplay'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExploreProduct category={category} setCategory={setCategory}/>
      <SubProductDisplay category={category} />
    </div>
  )
}

export default Home
