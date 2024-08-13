import React, { useCallback, useContext, useEffect } from 'react'
 
import { AuthVoteContext } from '../../context/vote/AuthVoteContext'
import AdminLayout from './AdminLayout'
import { Link } from 'react-router-dom'

const GetCandidates = () => {
 

    const { candidates, getCandidates, setLogin, deleteCandidate } = useContext(AuthVoteContext);
    console.log(candidates, "All candidates displaying")

    const deleteCandidates = (id) => {
        deleteCandidate(id);
    }

    // use this USEeffect for renderring the entire web page without reloading 


    useEffect(() => {
        getCandidates();
    }, [deleteCandidates]);


    return (
        <AdminLayout>
            {candidates && candidates !== 0 ? (
                <div className="grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
                    {candidates.map((candidate, index) => (
                        <div key={index} className="bg-gray-900 m-4 w-96 shadow-xl rounded-lg overflow-hidden">
                            <div className="px-10 pt-10">
                                <img
                                    // src={arr[index % arr.length]} // for local images
                                    src={candidate.image}
                                    alt={candidate.name}
                                    className="rounded-xl h-60"
                                    width={300}
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h2 className="text-lg text-slate-100"><span className='text-lg font-semibold'>Name :</span> {candidate.name}</h2>
                                <p className="text-gray-200"><span className='text-lg font-semibold'>Age :</span> {candidate.age}</p>
                                <p className="text-gray-200 mb-4"><span className='text-lg font-semibold'>Party :</span>  {candidate.party} </p>
                                <div className='flex justify-around'>

                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        deleteCandidates(candidate._id);
                                        console.log(candidate._id, "---id ")
                                    }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                        Delete
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
        </AdminLayout>
    );
};

export default GetCandidates;



// Edit Button before the Delete Button
// <Link to={`/updateCandidate/${candidate._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//     Edit
// </Link>