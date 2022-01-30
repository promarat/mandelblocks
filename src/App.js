import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLayout from './layout/AppLayout';
import HomeScreen from './pages/home/HomeScreen';
import MintScreen from './pages/mint/MintScreen';
// import SearchScreen from './pages/search/SearchScreen';
// import NotFound from './pages/error/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="mint" element={<MintScreen />} />
          {/* <Route path="/search" element={<SearchScreen />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
