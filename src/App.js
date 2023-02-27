import Main from "./components/elements/Main/Main";
import {Route, Router, Routes} from "react-router-dom";
import VideoPlayer from "./components/UI/VideoPlayer/VideoPlayer";
import {Data} from "./data";
import MainIndex from "./components/elements/MainIndex/MainIndex";
import {useEffect, useState} from "react";
import axios from "axios";
import VideoPlayerFilm from "./components/UI/VideoPlayerFilm/VideoPlayerFilm";
import Films from "./components/elements/Films/Films";
import Serials from "./components/elements/Serials/Serials";
import FavoritePage from "./components/elements/FavoritePage/FavoritePage";
import LoginPage from "./components/elements/LoginPage/LoginPage";
import RegisterPage from "./components/elements/RegisterPage/RegisterPage";
import PopularComplitation from "./components/elements/Complitation/PopularComplitation";


function App() {

    return (
        <div className="App">
         <Routes>
             <Route path="/" element={<MainIndex/>}/>
             <Route path="film/:id/:name" element={<Main/>}/>
             <Route path="watch/:name/:id" element={<VideoPlayer />}/>
             <Route path="watch/:name" element={<VideoPlayerFilm/>}/>
             <Route path="/Films" element={<Films/>}/>
             <Route path="/Serials" element={<Serials/>}/>
             <Route path={'/Popular'} element={<PopularComplitation/>}/>
             <Route path="/Favorite" element={<FavoritePage/>}/>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/register" element={<RegisterPage/>}/>
         </Routes>
        </div>
)

}


export default App;
