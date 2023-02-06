import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Header from "../Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../UI/SideBar/Sidebar";
import {Link} from "react-router-dom";


const FavoritePage = () =>{
    const storeData = useSelector(state => state.favoriteReducer);
    const [favoriteFilm, setFavoriteFilm] = useState([]);

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
    })
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
                            <div className={styles.film} >
                                {
                                    filtered.map(film =>
                                        <div key={film.id} className={styles.filmLib}>
                                            <Link to={`/film/${film.id}/${film.name}`}>
                                                <img key={film.id} src={film.img} width='350' alt={film.name}/>
                                                <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    : <div>
                    <Header/>
                        <div className={styles.wrapper}>
                        <Sidebar
                            sideBar={sideBar}
                            setSideBar={setSideBar}/>
                        <div className={styles.film}>
                            <div className={styles.filmLib}>
                                <span style={{color: '#fff'}}>Вы пока ничего не добавили в избранное...</span>
                            </div>
                        </div>
                        </div>
                    </div>
            }
            </>
    );
}

export default FavoritePage