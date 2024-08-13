import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthVoteContext } from "../context/vote/AuthVoteContext.js"

const Signin = () => {
 
    const { userLogin, isLogin } = useContext(AuthVoteContext);
    const [aadharnumber, setAadharNumber] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await userLogin({ aadharnumber, password })

            // console.log("token ", data?.token)
            if (data?.sucess) {
                toast.success('Successfully Logged In!');
                navigate("/HomePage");
            }
            navigate("/profile")

        } catch (error) {
            toast.error("Something went wrong !")
            console.error(error);
            if (isLogin == 'true') {
                navigate('/')
            }
        }
    }

    return (
        <Layout>
            <div className="flex  flex-col justify-center px-9   lg:px-10 min-h-[100vh] bg-gray-950 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="  text-center text-4xl font-bold ">Welcome to R2H</h2>
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight  ">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="aadharNumber" className="block text-sm font-medium leading-6  ">Aadhar Number</label>
                            <div className="mt-2">
                                <input id="aadharNumber" name="aadharNumber" type="text" value={aadharnumber} onChange={(e) => setAadharNumber(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6  ">Password</label>
                                <div className="text-sm">
                                    <Link to="/forget" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
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

                    <p className="mt-10 text-center text-sm text-gray-200">
                        Don’t have an account yet ?
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Signin
