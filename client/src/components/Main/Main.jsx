import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComp from './SearchComp'
import Home from './Home'
import DetailedView from './SearchComp/SearchList/DetailedView'


const Main = () => {
  return (
  <main>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<SearchComp />} />
        <Route path='/search/details/:id' element={<DetailedView />} />
    </Routes>
  </main>
  );
};

export default Main;
