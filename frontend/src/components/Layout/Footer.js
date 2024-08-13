import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer bg-gray-950 text-white h-16 border-t-2 border-gray-600 shadow-slate-700 shadow-md'>
      <h4 className='text-center'>All Right Reserved &copy; Ecommerce</h4>
      <p className='text-center mt-3'>
      <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
      <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer
