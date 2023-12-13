/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListPage from "./page/List-Page.jsx";
import SavePage from "./page/Save-Page.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListPage/>}/>
            <Route path="/save" element={<SavePage/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
