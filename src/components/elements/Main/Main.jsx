import Sidebar from "../../UI/SideBar/Sidebar";
import Information from "./Information";
import NavigationBottom from "../../UI/NavigationBottom/NavigationBottom";
import {useEffect, useState} from "react";
import style from './Main.module.scss'
import Episodes from "../Episodes/Episodes";
import Details from "../Details/Details";
import Header from "../Header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

const Main = () => {
    const {id} = useParams();
    const [film, setFilm] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer);
    const [favorite, setFavourite] = useState(false);
    const [sideBarShow, setSideBarShow] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    useEffect(() =>{
        axios.get(`http://localhost:3001/Data/${id}`).then(data => setFilm(data.data));
        storeData[id] ? setFavourite(true) : setFavourite(false);
    }, [id]);
    return(
        <div key={id}>
        <Header/>
        <div className={style.wrapper}>

            <Sidebar
            sideBar={sideBarShow}
            setSideBar={setSideBarShow}/>

            <div className={style.main}
                style={{backgroundImage: `url(${film.mainImage})`,
                width: sideBarShow ? '85%' : '90%'}}>
                    {
                        activeTab === 1 ?
                <Information movie={film} favoriteFilm={favorite} setFavoriteFilm={setFavourite}/>
                    : activeTab === 2 ?
                                <Episodes movie={film} id={film.id}/>
                                : activeTab === 3 &&
                                <Details movie={film}/>
                    }
                <NavigationBottom activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
        </div>
        </div>
    )
}

export default Main;