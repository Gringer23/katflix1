import Main from "./components/elements/Main/Main";
import {Route, Routes} from "react-router-dom";
import VideoPlayer from "./containers/VideoPlayer/VideoPlayer";
import MainIndex from "./components/elements/MainIndex/MainIndex";
import VideoPlayerFilm from "./containers/VideoPlayerFilm/VideoPlayerFilm";
import Films from "./components/elements/Films/Films";
import Serials from "./components/elements/Serials/Serials";
import FavoritePage from "./components/elements/FavoritePage/FavoritePage";
import LoginPage from "./components/elements/LoginPage/LoginPage";
import RegisterPage from "./components/elements/RegisterPage/RegisterPage";
import PopularComplitation from "./containers/Complitation/PopularComplitation";
import IndexPage from "./components/elements/IndexPage/IndexPage";


function App() {

    return (
        <div className="App">
         <Routes>
             <Route path="/" element={<IndexPage/>}/>
             <Route path="main" element={<MainIndex/>}/>
             <Route path="/film/:id/:name" element={<Main/>}/>
             <Route path="watch/:name/:id" element={<VideoPlayer />}/>
             <Route path="watch/:name" element={<VideoPlayerFilm/>}/>
             <Route path="Films" element={<Films/>}/>
             <Route path="Serials" element={<Serials/>}/>
             <Route path="Popular" element={<PopularComplitation/>}/>
             <Route path="/Favorite" element={<FavoritePage/>}/>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/register" element={<RegisterPage/>}/>
         </Routes>
        </div>
)

}


export default App;
