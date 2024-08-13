import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminNabar from './AdminNabar'
import Footer from '../../components/Layout/Footer';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet'

const AdminLayout = ({ children, title = "Ecommerce app - Shope now", description = "mern stack project", keywords = "mern, react,node,mongodb", author = "Rohit" }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <AdminNabar />
      <main className='bg-slate-800' style={{ minHeight: '81vh'   , padding:"4px" }}>
        <Toaster />
        {
          children
        }
      </main>
      <Footer />
    </div>
  )
}

export default AdminLayout
