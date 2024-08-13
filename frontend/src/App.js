import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import AdminLogin from './pages/admin/AdminLogin.js';
import AdminLoyout from './pages/admin/AdminLayout.js';
import ForgetPassword from './pages/ForgetPassword.js';
import Candidate from './pages/candidates/Candidates.js'
import CreateCandidate from './pages/candidates/CreateCandidate.js';
import AdminDetails from './pages/admin/AdminDetails.js';
import GetCandidates from './pages/admin/GetCandidates.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import DetailsCandidate from './pages/candidates/DetailsCandidate.js';
import GetWin from './pages/admin/GetWin.js'
import UpdateCandidate from './pages/candidates/UpdateCandidate.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/about' element={<About />} />
      <Route path='/homePage' element={< HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/forget' element={<ForgetPassword />} />
      <Route path='/contact' element={<Contact />} />

      // candidates
      <Route path='/candidates' element={<Candidate />} />
      <Route path='/candidates/create' element={<CreateCandidate />} />
      <Route path='/candidates/details/:candidateId' element={<DetailsCandidate />} />
      <Route path='/updateCandidate/:candidateId' element={<UpdateCandidate />} />


      // Admin Routes
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route path='/adminLoyout' element={<AdminLoyout />} />
      <Route path='/adminDetails' element={<AdminDetails />} />
      <Route path='/getCandidates' element={<GetCandidates />} />
      <Route path='/getWin' element={<GetWin />} />

    </Routes>
  );
}

export default App;
