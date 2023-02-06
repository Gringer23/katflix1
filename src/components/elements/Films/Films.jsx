import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../UI/SideBar/Sidebar";
import {Link, useParams} from "react-router-dom";


const Films = () => {

    const {films} = useParams();
    const [film, setFilm] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/Data?type=Film').then(res => setFilm(res.data));
    }, [films]);

    const [bar, setBar] = useState(false);
    const [value, setValue] = useState('');
    const filtered = film.filter(filterFilm =>{
        return filterFilm.rusName.toLowerCase().includes(value.toLowerCase());
    });

    return(
        <div >
            <Header onChange={(e)=> setValue(e.target.value)}/>
            <div className={styles.wrapper}>
                <Sidebar
                    sideBar={bar}
                    setSideBar={setBar}/>
                <div className={styles.film} >
                    {
                        filtered.map(film =>
                            <div key={film.id} className={styles.filmLib}>
                                <Link to={`/film/${film.id}/${film.name}`}>
                                    <div key={film.id}  className={styles.main} style={{backgroundImage: `url(${film.mainImage})`, width: '350px'}}>
                                        <div className={styles.rating} style={{backgroundColor: film.rating > 7 ? '#02ad02' : '#7c7b7b'}}>{film.rating}</div>
                                    </div>
                                    <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Films;