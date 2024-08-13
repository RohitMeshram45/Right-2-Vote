import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthVoteContext } from "../context/vote/AuthVoteContext.js"

const Signup = () => {
    const { userSignUp } = useContext(AuthVoteContext);

    const [name, setName] = useState("");
    const [aadharnumber, setAadharnumber] = useState();
    const [password, setPassword] = useState('');
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [phone, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [role, setRole] = useState("voter")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userSignUp({ name, age, email, phone, address, aadharnumber, password, role });

            // console.log("token ",data?.token)

            if (data?.sucess) {
                toast.success('Successfully Logged In!');
                navigate("/HomePage");
            }
            else {
                toast.error(data.error);
            }
            navigate("/")
        } catch (error) {
            toast.error("User didn't work.")
            console.error(error);
        }
    }

    return (
        <Layout>
            <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="aadharnumber" className="block text-sm font-medium leading-6 text-gray-900">Aadhar Number</label>
                            <div className="mt-2">
                                <input id="aadharnumber" name="aadharnumber" type="text" value={aadharnumber} onChange={(e) => setAadharnumber(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Age" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                            <div className="mt-2">
                                <input id="Age" name="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                            <div className="mt-2">
                                <input id="mobile" name="mobile" type="email" value={phone} onChange={(e) => setMobile(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Aaddress</label>
                            <div className="mt-2">
                                <input id="address" name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">Role </label>
                            <div className="mt-2">
                                <input id="role" name="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter the Password' required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account yet ?
                        <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Signup;
