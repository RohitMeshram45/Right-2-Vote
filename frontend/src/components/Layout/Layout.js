import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children, title = "Voting app - Vote now", description = "mern stack project", keywords = "mern, react,node,mongodb", author = "Rohit" }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '81vh' }}>
                <Toaster />
                {
                    children
                }
            </main>
            <Footer />
        </>
    )
}

export default Layout;
