import React, { useContext, useEffect } from 'react'
import AdminLayout from './AdminLayout';
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';

const GetWin = () => {
    const { getCount, votes } = useContext(AuthVoteContext);

    useEffect(() => {
        getCount();
    }, []);
    return (
        <AdminLayout>
            <h3 className="text-5xl p-6 font-serif font-semibold text-gray-100 bg-black text-center pt-5">
                Poll Exit 
            </h3>
            <span className='grid grid-cols-3 px-4  bg-slate-900'>
                {votes.map((vote, index) => {
                    return (
                        <figure
                            className="flex   items-center justify-center rounded-lg m-5  border-gray-400 bg-black  shadow-2xl p-7 text-center md:rounded-t-none md:rounded-ss-lg md:border dark:gray-100"
                            key={index}
                        >
                            <img src={vote.image} className="rounded-xl" width={200} height={200} alt='Candidate' />
                            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">

                                <p className="my-4 font-medium text-white">
                                    Name : <span className="text-gray-100">{vote.name}</span>
                                </p>
                                <p className="my-4 font-medium text-white">
                                    Party : <span className="text-gray-100">{vote.party}</span>
                                </p>
                                <p className="my-4 font-medium text-white">
                                    votes : <span className="text-gray-100">{vote.count}</span>
                                </p>
                            </blockquote>
                        </figure>
                    );
                })}
            </span>
        </AdminLayout>
    )
}

export default GetWin

// {candidates && candidates !== 0 ? (
//     <div className="grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
//         {candidates.map((candidate, index) => (
//             <div key={index} className="bg-white m-4 w-96 shadow-xl rounded-lg overflow-hidden">
//                 <div className="px-10 pt-10">
//                     <img
//                         src={arr[index % arr.length]}
//                         alt={candidate.name}
//                         className="rounded-xl h-60"
//                         width={300}
//                     />
//                 </div>
//                 <div className="p-5 text-center">
//                     <h2 className="text-lg"><span className='text-lg font-semibold'>Name :</span> {candidate.name}</h2>
//                     <p className="text-gray-700"><span className='text-lg font-semibold'>Age :</span> {candidate.age}</p>
//                     <p className="text-gray-700 mb-4"><span className='text-lg font-semibold'>Party :</span>  {candidate.party} </p>
//                     <div className='flex justify-around'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                             Edit
//                         </button>
//                         <button onClick={(e) => {
//                             e.preventDefault();
//                             deleteCandidates(candidate._id);
//                             console.log(candidate._id, "---id ")
//                         }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>

// ) : (
//     <>
//         <h1 className="text-3xl font-bold text-center">Candidate Not Present</h1>
//         <div className="text-9xl font-bold text-center">✖️🤷‍♂️</div>
//     </>
// )}