import React, { useCallback, useContext, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

import toast from 'react-hot-toast';
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';
import { useNavigate } from 'react-router-dom';

const Candidates = () => {

    const navigate = useNavigate();
    const { candidates, getCandidates, setLogin, voting } = useContext(AuthVoteContext);


    useEffect(() => {
        setLogin(true);
        getCandidates();
    }, [setLogin]);

    return (
        <Layout>
            <div>
                <h1 className='text-center text-white py-5 text-5xl font-bold font-serif bg-gray-950'> Candidates </h1>
                {candidates && candidates.length > 0 ? (
                    <div className="grid grid-cols-3 max-md:grid-cols-1 justify-items-center bg-gray-950">
                        {candidates.map((candidate, index) => (
                            <div
                                key={index}
                                className="bg-transparent border shadow-2xl m-4 w-96 my-5 mb-7 hover:bg-indigo-950 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div className="px-10 pt-10">
                                    <img
                                        src={candidate.image}
                                        alt={candidate.name}
                                        className="rounded-xl h-60"
                                        width={300}
                                    />
                                </div>
                                <div className="p-5 text-center">
                                    <h2 className="font-bold mb-2 text-xl">
                                        <span className='text-xl font-semibold text-gray-100'>Name : {candidate.name}</span>
                                    </h2>
                                    <p className="text-gray-100 mb-4 text-xl font-medium">
                                        <span className='text-xl font-semibold'>Age : </span>{candidate.age}
                                    </p>
                                    <p className="text-gray-100 mb-4 text-xl font-medium">
                                        <span className='text-xl font-semibold'>Party : </span>{candidate.party}
                                    </p>
                                    <div>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            try {
                                                const { data } = voting(candidate._id);

                                                if (data?.isVote === "voted") {
                                                    toast.error("User Already Present");
                                                }
                                            } catch (error) {
                                                navigate('/')
                                            }

                                        }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                            Vote Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-center">Candidate Not Present</h1>
                        <div className="text-9xl font-bold text-center">✖️🤷‍♂️</div>
                    </>
                )}

            </div>
        </Layout>
    );
};

export default Candidates;
