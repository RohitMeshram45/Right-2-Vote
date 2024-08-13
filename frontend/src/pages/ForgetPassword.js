import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import { AuthVoteContext } from '../context/vote/AuthVoteContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgetPassword = () => {

    const { updatePassword } = useContext(AuthVoteContext);
    const [aadharnumber, setAadharNumber] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await updatePassword({ aadharnumber, currentPassword, newPassword })
            console.log("dat aaa raha h ky")
            if (data?.sucess) {
                toast.success('Successfully Logged In!');
                navigate("/profile");
            }
        } catch (error) {
            toast.error("Login didn't work.")
            console.error(error);
            navigate('/')
        }
    }

    return (
        <Layout>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Froget Password</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="aadharNumber" className="block text-sm font-medium leading-6 text-gray-900">Aadhar Number</label>
                            <div className="mt-2">
                                <input id="aadharNumber" name="aadharNumber" type="text" value={aadharnumber} onChange={(e) => setAadharNumber(e.target.value)} placeholder='Enter the Aadhar card Number' required className="p-2 block w-full rounded -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Current Password</label>
                            <input id="password" name="password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder='Enter the Password' required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                            <input id="password" name="password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter the Password' required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Password</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account yet ?
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default ForgetPassword
