import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';

const AdminDetails = () => {

    const { Users, displayUser } = useContext(AuthVoteContext);
    const { name, email, address, aadharnumber, age } = Users;

    useEffect(() => {
        displayUser();
    }, [])

    return (
        <AdminLayout className="">
            <section class="text-gray-600 body-font overflow-hidden border-2 border-slate-700 bg-gray-900 ">
                <div class="container px-5 py-20 mx-auto ">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly border border-3 px-2 py-4 bg-slate-950  shadow-gray-600 shadow-sm rounded-xl">
                        <img alt="ecommerce" class="lg:w-1/4 w-full lg:h-80 h-44 object-cover object-center justify-center items-center mt-12 rounded-3xl" src="https://media.istockphoto.com/id/896778006/vector/vector-india-state-flag-formed-by-crowd-of-cartoon-people.jpg?s=2048x2048&w=is&k=20&c=npoZ_c9A10IHamtks521WJYIjxYimVA-a9jLr8PkCOQ=" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font   text-slate-200 font-bold tracking-widest font-serif ">Admin Name : </h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1 font-serif ">{name}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-slate-200 font-bold tracking-widest font-serif ">Admin Aadharnumber : </h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1 font-serif ">{aadharnumber}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-slate-200 font-bold tracking-widest">Admin Email : </h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1 font-serif ">{email}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-slate-200 font-bold tracking-widest font-serif ">Admin Age : </h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1 font-serif ">{age}</h1>
                            </div>
                            <div className='mb-3 mt-2 '>
                                <h2 class="text-xl title-font text-slate-200 font-bold tracking-widest font-serif ">Admin Address : </h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1 font-serif ">{address}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    )
}

export default AdminDetails
