import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComp from './SearchComp'
import Home from './Home'
import DetailedView from './SearchComp/SearchList/DetailedView'
import Login from './Login'
import Register from './Register'
import Fantasy from './Home/Categories/Fantasy'
import Urban from './Home/Categories/Urban'
import Humorous from './Home/Categories/Humorous'
import Epic from './Home/Categories/Epic'
import Dark from './Home/Categories/Dark'
import Dystopian from './Home/Categories/Dystopian'
import YoungAdult from './Home/Categories/YoungAdult'


const Main = () => {
  return (
  <main>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/category/fantasy' element={<Fantasy />} />
        <Route path='/category/youngadultfantasy' element={<YoungAdult />} />
        <Route path='/category/urbanfantasy' element={<Urban />} />
        <Route path='/category/humorousfantasy' element={<Humorous />} />
        <Route path='/category/epicfantasy' element={<Epic/>} />
        <Route path='/category/darkfantasy' element={<Dark />} />
        <Route path='/category/dystopianfantasy' element={<Dystopian />} />
        <Route path='/search' element={<SearchComp />} />
        <Route path='/search/details/:id' element={<DetailedView />} />
    </Routes>
  </main>
  );
};

export default Main;
