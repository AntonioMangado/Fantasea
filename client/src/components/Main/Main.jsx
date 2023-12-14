import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComp from './SearchComp'
import Home from './Home'


const Main = () => {
  return (
  <main>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<SearchComp />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  </main>
  );
};

export default Main;
