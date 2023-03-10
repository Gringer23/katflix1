import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../../containers/Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import style from "../../../containers/Complitation/Complitation.module.scss"
import Sidebar from "../../../containers/SideBar/Sidebar";
import {Link, useParams} from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Button from "../../UI/Button/Button";


const Films = () => {

    const {films} = useParams();
    const [film, setFilm] = useState([]);
    const [offset, setOffset] = useState(0);
    const position = 390;
    useEffect(() =>{
        axios.get('http://localhost:3001/Data?type=Film').then(res => setFilm(res.data));
    }, [films]);

    const [bar, setBar] = useState(false);
    const [value, setValue] = useState('');
    const filtered = film.filter(filterFilm =>{
        return filterFilm.rusName.toLowerCase().includes(value.toLowerCase());
    });

    const prevSlideHandler = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset + position;
            return Math.min(newOffset, 0);
        })
    }

    const nextHandler = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset - position;
            const maxOffset = -(position * (film.length - 3));
            return Math.max(newOffset, maxOffset);
        })
    }

    return(
        <div>
            <Header onChange={(e) => setValue(e.target.value)}/>
            <div className={styles.wrapper}>
                <Sidebar
                    sideBar={bar}
                    setSideBar={setBar}/>
                <div className={styles.wrapper_genre}>
                    <h2 className={style.title}>Фильмы</h2>
                    <div className={style.popular}>
                        <div className={style.buttonSlider}
                             style={{display: `${filtered.length <= 3 || filtered.length === 0 ? 'none' : ''}`}}>
                            <Button cb={prevSlideHandler}>
                                <i className='bx bxs-chevron-left'></i>
                            </Button>
                        </div>
                        <div className={style.films}>
                    {
                        film.length === 0 ? <PulseLoader size={20} loading={true} color={'#c62e21'} className={style.loader}/> :
                        filtered.map(film =>
                            <div key={film.id} className={style.filmLib}
                                 style={{transform: `translateX(${offset}px)`}}>
                                <Link to={`/film/${film.id}/${film.name}`}>
                                    <div key={film.id}  className={style.main} style={{backgroundImage: `url(${film.mainImage})`, width: '350px'}}>
                                        <div className={style.rating} style={{backgroundColor: film.rating > 7 ? '#02ad02' : '#7c7b7b'}}>{film.rating}</div>
                                    </div>
                                    <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                </Link>
                            </div>
                        )
                    }
                </div>
                        <div className={style.buttonSlider}
                             style={{display: `${filtered.length <= 3 || filtered.length === 0 ? 'none' : ''}`, left: '20px'}}>
                            <Button cb={nextHandler}>
                                <i className='bx bxs-chevron-right'></i>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Films;