import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Mui_DrawerSearch from './Components/Mui_DrawerSearch';
import Player from './Components/Sound';
import './App.css'
import { Box } from '@mui/material';
import Mui_Drawer from './Components/Drawer';
import Quraa from './Components/Quraa';
import Qaraa from './Components/Qara';
import FamousQuraa from './Components/FamousQuraa';

function App() {
  const drawerWidth = 340;
  return (
    <BrowserRouter>
      <div className="App">
        <Mui_Drawer />
        <Box
            component="main"
            sx={{ minHeight: { xs: 'calc(100%)', lg: `100%` }, width: { xs: '100%', lg: `calc(100% - ${drawerWidth}px)` }, padding: "90px 30px", background: "#222222", position:'absolute',left:'0', top:"0"}}
        >
            <Routes>
              <Route path='/' element={<FamousQuraa />}></Route>
              <Route path='search' element={<Mui_DrawerSearch />}></Route>
              <Route path='/:id' element={<Qaraa />}></Route>
              <Route path='/:id/:swara' element={<Player />}></Route>
            </Routes>
          </Box>
      </div>
    </BrowserRouter>
  )
}

export default App;
