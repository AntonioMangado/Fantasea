import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComp from './SearchComp'
import Home from './Home'
import DetailedView from './SearchComp/SearchList/DetailedView'
import Login from './Login'
import Register from './Register'


const Main = () => {
  return (
  <main>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home/:u?' element={<Home />} />
        <Route path='/search' element={<SearchComp />} />
        <Route path='/search/details/:id' element={<DetailedView />} />
    </Routes>
  </main>
  );
};

export default Main;
