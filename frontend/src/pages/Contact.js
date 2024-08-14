import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { AuthVoteContext } from '../context/vote/AuthVoteContext';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const { Contact } = useContext(AuthVoteContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massege, setMassege] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Contact({ name, email, massege });

      console.log("Data of Contact --- ", data)

      alert("data contact Having ")

    } catch (error) {
      alert("Internal server Error")
      console.log("Error while Contact")
      navigate('/')
    }
  }

  return (
    <Layout>
      <section class="text-gray-200 font-bold body-font relative bg-gray-950">
        <div class="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div class="lg:w-2/3 md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p class="mt-1">Abha Nagr Shivam Society Pardi Nagpur Maharastra - 440035</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a class="text-indigo-500 leading-relaxed">rohitjmeshram@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p class="leading-relaxed">+91 9158031695</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-slate-800 flex flex-col md:ml-auto w-full md:py-5 mt-8 md:mt-0 p-5 rounded-xl">
            <h2 class=" text-center text-3xl m-4 font-medium title-font text-gray-200 ">Contact</h2>
            <p class="leading-relaxed mb-5 text-gray-200 font-bold text-center">Fee Free to Contact with me</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-200 font-bold">Name : </label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Name' type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-200 font-bold">Email : </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Email' type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-200 font-bold">Message : </label>
              <textarea value={massege} onChange={(e) => setMassege(e.target.value)} placeholder='Enter the Message' id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button onClick={handleContact} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-sans">Button</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

// <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
