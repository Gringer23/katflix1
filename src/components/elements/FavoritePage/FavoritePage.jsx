import {useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import Header from "../../../containers/Header/Header";
import style from "./FavoritePage.module.scss";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../../containers/SideBar/Sidebar";
import {Link} from "react-router-dom";
import {CustomContext} from "../../../context/Context";


const FavoritePage = () =>{
    const storeData = useSelector(state => state.favoriteReducer);
    const [favoriteFilm, setFavoriteFilm] = useState([]);
    const {user} = useContext(CustomContext);

    useEffect(() => {
        const arr = Object.entries(storeData);
        if(arr.length){
            const res = arr.map(item =>{
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setFavoriteFilm(res);
        }
    },[]);



    const [sideBar, setSideBar] = useState(false);
    const [value, setValue] = useState('');
    const filtered = favoriteFilm.filter(film =>{
        return film.rusName.toLowerCase().includes(value.toLowerCase());
    });

    return(
        <>
            {
                favoriteFilm.length ?
                    <div>
                        <Header onChange={(e)=> setValue(e.target.value)}/>
                        <div className={styles.wrapper}>
                            <Sidebar
                                sideBar={sideBar}
                                setSideBar={setSideBar}/>
                            <div className={style.films} >
                                {
                                    filtered.map(film =>
                                        <div key={film.id} className={style.filmLib}>
                                            <Link to={`/film/${film.id}/${film.name}`}>
                                                <div key={film.id}  className={style.main} style={{backgroundImage: `url(${film.img})`, width: '350px'}}>
                                                    <div className={style.rating} style={{backgroundColor: film.rating > 7 ? '#02ad02' : '#7c7b7b'}}>{film.rating}</div>
                                                </div>
                                                <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                    <Header/>
                        <div className={styles.wrapper}>
                        <Sidebar
                            sideBar={sideBar}
                            setSideBar={setSideBar}/>
                        <div className={style.films}>
                            <div className={style.filmLib}>
                                <span style={{color: '#fff'}}>{
                                    user.name.length ? 'Вы пока ничего не добавили в избранное...' :'Для добавления в Избранное, необходимо ' }
                                    {
                                        user.name.length ? '' : <Link to={'/login'} style={{color: '#c62e21'}}>войти</Link>
                                    }
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
            }
            </>
    );
}

export default FavoritePage