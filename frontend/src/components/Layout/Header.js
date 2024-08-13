import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthVoteContext } from '../../context/vote/AuthVoteContext';

const Header = () => {
    const { logOut, login, setLogin } = useContext(AuthVoteContext);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
            alert('Error while logging out');
        }
    };

    return (
        <header className="text-gray-200 body-font bg-gray-950  shadow-slate-700 shadow-md sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h2 className="ml-3 text-3xl font-extrabold  opacity-90 shadow-slate-50">R2V</h2>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={'/homePage'} className="mr-5 hover:text-gray-300">Home</Link>
                    <Link to={'/about'} className="mr-5 hover:text-gray-300">About</Link>
                    <Link to={'/'} className="mr-5 hover:text-gray-300">Login</Link>
                    <Link to={'/adminLogin'} className="mr-5 hover:text-gray-300">AdminLogin</Link>
                    <Link to={'/contact'} className="mr-5 hover:text-gray-300">Contact</Link>
                </nav>
                <div>
                    {
                        login ? (
                            <button 
                                onClick={handleLogout} 
                                className="inline-flex ml-2 items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                                Logout
                                <svg 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    className="w-4 h-4 ml-1" 
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        ) : (
                            <Link 
                                to={"/"} 
                                onClick={() => setLogin(true)} 
                                className="inline-flex ml-2 items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-black hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                                Login
                                <svg 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    className="w-4 h-4 ml-1" 
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
