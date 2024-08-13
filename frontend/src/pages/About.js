import React from 'react'
import Layout from '../components/Layout/Layout'
import about1 from '../images/About.jpg'
import Notes from '../images/notes.jpg'
import Notes1 from '../images/notes3.jpg'
import voting from '../images/voting-sign.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Layout  >
      <div className='bg-rose-200'>
        <div >
          <img src={about1} className='  w-[100vw] h-[100vh] ' />
          <div className='flex '>
            <img src={Notes} className=' w-[100vw] h-[100vh] border-t-4 ' />
          </div>
        </div>
        <div>
          <strong className='text-6xl absolute top-[39%] left-[38%] font-serif font-bold text-red-500'>Voting is a </strong>
          <strong className='text-6xl absolute top-[49%] left-[37%] font-serif font-bold text-gray-900'>Super Power</strong>
          <strong className='text-5xl absolute top-[59%] left-[37%] font-sans font-semibold text-green-600'>Use it well</strong>
        </div>
        <div>
          <h1 className='text-base absolute top-[96%] left-[44%] font-serif text-pretty font-bold'>Make Your voice heard</h1>
          <Link to={`/candidates`}><img src={voting} className='cursor-pointer w-[20%] h-[10vh] object-contain absolute top-[85%]  left-[40%] font-serif font-bold' /></Link>
          <Link to={`/candidates`} className='cursor-pointer w-[20%] h-[10vh] object-contain absolute top-[90%]  left-[55%] font-serif font-bold text-red-600 animate-bounce hover:text-green-600' >Click</Link>
        </div>
        <div className='notes '>
          <h1 className='text-3xl absolute top-[130%] left-[62%] font-serif text-pretty font-bold'>Keeps Notes</h1>
          <h3 className='text-xl absolute top-[136%] left-[58%] font-serif text-pretty font-bold'>1. Sign up or log in to your account</h3>
          <h3 className='text-xl absolute top-[140%] left-[58%] font-serif text-pretty font-bold'>2. Get all the Candidates available for votes </h3>
          <h3 className='text-xl absolute top-[144%] left-[58%] font-serif text-pretty font-bold'>3. Give the vote to your Favourate Candidate</h3>
          <h3 className='text-xl absolute top-[148%] left-[58%] font-serif text-pretty font-bold'>4. You can also update your passwords</h3>
        </div>
        <div className='notes '>
          <h1 className='text-3xl absolute top-[153%] left-[62%] font-serif text-pretty font-bold'>Our Mission</h1>
          <h3 className='text-xl absolute top-[159%] left-[58%] font-serif text-pretty font-bold'>  Our mission is to provide a transparent, secure , </h3>
          <h3 className='text-xl absolute top-[162%] left-[58%] font-serif text-pretty font-bold'>and user-friendly platform for online voting, </h3>
          <h3 className='text-xl absolute top-[165%] left-[58%] font-serif text-pretty font-bold'>ensuring that every vote counts.</h3>
        </div>
        <div className='technology '>
          <h1 className='text-3xl absolute top-[171%] left-[62%] font-serif text-pretty font-bold'>Technology Stack</h1>
          <h3 className='text-lg absolute top-[177%] left-[58%] font-serif text-pretty font-medium'> <span className='text-xl font-semibold'>1. Frontend -: </span> ReactJs , Tailwindcss</h3>
          <h3 className='text-lg absolute top-[181%] left-[58%] font-serif text-pretty font-medium'><span className='text-xl font-semibold'>2. Backend -: </span> Express , NodeJs  </h3>
          <h3 className='text-lg absolute top-[185%] left-[58%] font-serif text-pretty font-medium'><span className='text-xl font-semibold'>3. Database -:</span> MongoDB</h3>
          <h3 className='text-lg absolute top-[189%] left-[58%] font-serif text-pretty font-bold'>4. JWT for authentication </h3>
          <h3 className='text-lg absolute top-[193%] left-[58%] font-serif text-pretty font-bold'>5. Bcrypt for Hashing user's passwords</h3>
        </div>
      </div>
    </Layout>
  )
}

export default About
