import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import AllContainer from './components/allCoctails/AllContainer';
import FindContainer from './components/findCoctail/FindContainer';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allcoctails' element={<AllContainer />} />
        <Route path='/find' element={<FindContainer />} />
      </Routes>
    </div>
  );
}

export default App;
