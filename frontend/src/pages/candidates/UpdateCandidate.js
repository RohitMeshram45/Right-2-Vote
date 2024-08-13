import React from 'react'
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';

const UpdateCandidate = () => {
    const { UpdateCandidate } = useContext(AuthVoteContext);
    const [name, setName] = useState();
    const [party, setParty] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await UpdateCandidate({ name, party, age, })

            console.log("dat aaa raha h ky")
            if (data?.sucess) {

                toast.success('Successfully Logged In!');
                navigate("/profile");
            }

        } catch (error) {
            toast.error("Login didn't work.")
            console.error(error);
            // navigate('/candidates')
        }
    }

    return (
        <Layout>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update Candidates</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the New Name' className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="party" className="block text-sm font-medium leading-6 text-gray-900">Party</label>
                            <input id="party" name="party" required type="text" value={party} onChange={(e) => setParty(e.target.value)} placeholder='Enter the New Party Name' className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div>
                            <label htmlFor="age" required className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                            <input id="age" name="age" type="Number" value={age} required onChange={(e) => setAge(e.target.value)} placeholder='Enter the New Age' className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div>
                            <button onClick={handleSubmit} type='submit' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Candidate</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account yet ?
                        <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign In</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateCandidate
