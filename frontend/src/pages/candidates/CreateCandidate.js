import React, { useContext, useState } from 'react';
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminLayout from "../admin/AdminLayout";

const CreateCandidateForm = () => {
    const { createCandidate, getCandidates } = useContext(AuthVoteContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [image, setImage] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCandidate({ name, party,image, age });
            toast.success('Candidate created successfully');
            getCandidates();
            navigate("/candidates/create");
        } catch (error) {
            toast.error('Failed to create candidate');
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-md mx-auto mt-8 bg-gray-800 p-4 my-10 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
                <div className="md:flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="mb-10">
                            <h1 className="text-center font-bold text-2xl text-gray-200">Create Candidate</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-3">
                                <label className="mb-2 font-bold text-lg text-gray-200">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border py-2 px-3 text-grey-800"
                                    placeholder="Enter candidate name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label className="mb-2 font-bold text-lg text-gray-200">Image URL</label>
                                <input
                                    type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="border py-2 px-3 text-grey-800"
                                    placeholder="Enter Image Url here"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label className="mb-2 font-bold text-lg text-gray-200">Party</label>
                                <input
                                    type="text"
                                    value={party}
                                    onChange={(e) => setParty(e.target.value)}
                                    className="border py-2 px-3 text-grey-800"
                                    placeholder="Enter candidate party"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label className="mb-2 font-bold text-lg text-gray-200">Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="border py-2 px-3 text-grey-800"
                                    placeholder="Enter candidate age"
                                    required
                                />
                            </div>
                            <div className="text-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Create Candidate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CreateCandidateForm;
