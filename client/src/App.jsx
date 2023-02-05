import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';

import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header  className="w-full flex justify-between items-center bg-gradient-to-r from-blue-500 to-gray-100  sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-br from-black to-[#303537]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App