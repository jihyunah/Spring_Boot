import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index';

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={ <Index />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;