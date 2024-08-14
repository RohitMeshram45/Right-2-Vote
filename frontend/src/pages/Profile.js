import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AuthVoteContext } from "../context/vote/AuthVoteContext.js"
import Layout from '../components/Layout/Layout.js';

const Profile = () => {
  const { Users, displayUser, setLogin } = useContext(AuthVoteContext);

  const { name, age, email, phone, address, aadharnumber, password, role } = Users;

  // console.log("Users-> ", Users)

  useEffect(() => {
    setLogin(true)
    // console.log("user Dekon re")

    displayUser();
    // console.log("Users-> ", Users)
  }, [displayUser]);

  const toUpperCase = (str) => {
    if (typeof str === 'string') {
      return str.toUpperCase();
    }
    return str; // Return the original value if it's not a string
  };
  return (
    <Layout className="flex w-full h-full justify-center items-center " >
      <h1 className='text-center py-5 text-white font-bold text-5xl bg-slate-800'>User Profile</h1>
      {Users && (<div className="  py-4 sm:py-6 lg:py-8 bg-slate-800">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">

            <img src="https://cdn.pixabay.com/photo/2024/06/19/11/40/man-8839866_1280.png" loading="lazy" alt="Photo  " className="h-full w-full object-cover object-center" />

            <div className="md:py-8 md:px-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-indigo-500 ">Name</span>
                <h2 className="text-2xl font-bold text-gray-200 lg:text-3xl font-serif tracking-tighter">{toUpperCase(name)}</h2>
              </div>

              <div className="mb-3 md:mb-3">
                <span className="mb-1 inline-block text-sm font-semibold text-indigo-500 md:text-base">Age</span>
                <h2 className="text-xl font-bold text-gray-200 max-lg:text-sm font-serif">{age} Years </h2>
              </div>

              <div className="mb-3 md:mb-3">
                <span className="mb-1 inline-block text-sm font-semibold text-indigo-500 md:text-base">Aadhar Card Number</span>
                <h2 className="text-xl font-bold text-gray-200 max-lg:text-sm font-serif">{aadharnumber} </h2>
              </div>
              <div className="mb-4 md:mb-3 text-start">
                <span className="mb-1 inline-block text-sm font-semibold text-indigo-500  md:text-base">Email</span>
                <h2 className="text-2xl font-bold text-gray-200 max-lg:text-sm font-serif">{email}</h2>
              </div>

              <div className="mb-3 md:mb-3">
                <span className="mb-1 inline-block text-sm font-semibold text-indigo-500 md:text-base">Address</span>
                <h2 className="text-xl font-bold text-gray-200 max-lg:text-sm font-serif">{address} </h2>
              </div>

              <div className="mb-6 md:mb-6">
                <span className="mb-1 inline-block text-sm font-semibold text-indigo-500  md:text-base">Phone</span>
                <h2 className="text-xl font-bold text-gray-200 max-lg:text-sm font-sans">{phone} </h2>
              </div>
              <div className="flex gap-2.5">
                <Link to="/candidates" className="inline-block flex-1 hover:bg-green-600  rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100   focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Vote Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </Layout>
  )
}

export default Profile

