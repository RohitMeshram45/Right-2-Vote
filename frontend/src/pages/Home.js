import React from 'react'
import Layout from '../components/Layout/Layout.js'
import FrontendBackground from '../images/FrontendBackground.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout >
      <div className=''>
        <img src={FrontendBackground} className='bg-cover w-full  h-[86vh] brightness-100' />
      </div>
      <h1 className='absolute  top-48 left-72 text-9xl font-semibold '><span className='text-orange-500 drop-shadow-xl brightness-90-xl'>Vote For</span><span className='text-white drop-shadow-xl '> The New</span> <span className='text-green-500 drop-shadow-xl brightness-90'>Change</span> </h1>
      <Link to={'/candidates'} className='absolute  top-[65%] left-80 text-xl font-medium px-3 rounded-lg py-1 bg-orange-600 border-2 border-black bg-transparent hover:bg-green-400'>Let`s Vote</Link>
    </Layout>
  )
}

export default Home 
