
import React, { useContext, useEffect, useState } from 'react'
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';
import Layout from '../../components/Layout/Layout';

const DetailsCandidate = () => {

    const { Users, displayUser } = useContext(AuthVoteContext);
    const { name, email, address, aadharnumber, age } = Users;

    useEffect(() => {
        displayUser();
    }, [])

    return (
        <Layout>
            <section class="text-gray-600 body-font overflow-hidden border border-3 bg-slate-100">
                <div class="container px-5 py-20 mx-auto ">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly border border-3 px-2 py-4 bg-slate-100 shadow-2xl  shadow-gray-500 rounded-xl">
                        <img alt="ecommerce" class="lg:w-1/4 w-full lg:h-80 h-44 object-cover object-center justify-center items-center mt-12 rounded-3xl" src="https://dummyimage.com/400x400" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font font-normal text-gray-500 tracking-widest">Candidate Name</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-gray-500 tracking-widest">Candidate Aadharnumber</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{aadharnumber}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-gray-500 tracking-widest">Candidate Email</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{email}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-gray-500 tracking-widest">Candidate Age</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{age}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-gray-500 tracking-widest">Candidate Address</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{address}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DetailsCandidate
