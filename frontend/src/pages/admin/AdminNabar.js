import React, { useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';

const AdminNabar = () => {
  const navigate = useNavigate();
  const { logOut, login, setLogin } = useContext(AuthVoteContext);
  setLogin(true);

  const handleLogout = async (e) => {
    e.setLogin(false)
     
    e.preventDefault();
    try {
      setLogin(false);
      logOut();
      navigate("/")
    } catch (error) {
      console.log(error)
      alert("Error while  Logout")
    }

  }

  useCallback(() => handleLogout, [handleLogout])
  return (
    <header className="text-gray-200 body-font bg-gray-950  shadow-slate-700 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <h2 className="ml-3 text-3xl font-bold">Rights</h2>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/adminDetails'} className="mr-5 hover:text-gray-500">Home</Link>
          <Link to={'/getCandidates'} className="mr-5 hover:text-gray-500">Candidate-Management</Link>
          <Link to={'/candidates/create'} className="mr-5 hover:text-gray-500">Create-Candidate</Link>
          <Link to={'/getWin'} className="mr-5 hover:text-gray-500">Get-Win</Link>
        </nav>
        <div className=''>
          {
            login ? (
              (<Link to={"/"} onClick={() => setLogin(true)} className="inline-flex ml-2 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none text-slate-950 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Logout
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"> </path>
                </svg>
              </Link>)
            ) :
              (<Link to={"/"} onClick={() => handleLogout} className="inline-flex ml-2 items-center text-gray-900 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">  Login
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"> </path>
                </svg>
              </Link>)
          }

        </div>
      </div>
    </header >
  )
}

export default AdminNabar
