import styles from './MainIndex.module.scss';
import Header from "../Header/Header";
import Sidebar from "../../UI/SideBar/Sidebar";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import Button from "../../UI/Button/Button";


const MainIndex = () => {
    const [sideBar, setSideBar] = useState(false);
    const [value, setValue] = useState('');
    const [movie, setMovie] = useState([]);
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const ref = useRef();
    const position = 390;

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // Пока остаются элементы для перемешивания.
        while (currentIndex != 0) {
            // Выбираем оставшийся элемент.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // И меняем местами с текущим элементом.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        axios.get('http://localhost:3001/Data').then(res => {
            const resp = res.data.map(film => {
                return film.id
            });
            const rand = shuffle(res.data);
            setMovie(rand);
            setItems(resp);
        });

    }, []);

    const genreFilter = movie.filter(movie => {
        return movie.genre[0].toLowerCase().includes(ref.current.innerText.toLowerCase());
    });

    const filtered = genreFilter.filter(film => {
        return film.rusName.toLowerCase().includes(value.toLowerCase());
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
            const maxOffset = -(position * (items.length - 3));
            return Math.max(newOffset, maxOffset);
        })
    }

    return (

        <div>
            <Header onChange={(e) => setValue(e.target.value)}/>
            <div className={styles.wrapper}>
                <Sidebar
                    sideBar={sideBar}
                    setSideBar={setSideBar}/>
                <div style={{display: 'flex', flexDirection: 'column',}}>
                <h2 ref={ref}>Популярное</h2>
                <div className={styles.buttonSlider}
                     style={{display: `${filtered.length <= 3 || filtered.length === 0 ? 'none' : ''}`}}>
                    <Button cb={prevSlideHandler}>
                        <i className='bx bxs-chevron-left'></i>
                    </Button>
                </div>
                <div className={styles.film} style={{maxWidth: `${filtered.length > 3 ? '77%' : ''}`}}>
                    {
                        movie.length === 0 ?
                            <PulseLoader size={20} loading={true} color={'#c62e21'} className={styles.loader}/> :
                            filtered.length === 0 ?
                                <span style={{color: '#fff'}}>По вашему запросу ничего не нашлось</span> :
                                filtered.map(film =>
                                    <div key={film.id} className={styles.filmLib}
                                         style={{transform: `translateX(${offset}px)`}}>
                                        <Link to={`film/${film.id}/${film.name}`}>
                                            <div key={film.id} className={styles.main}
                                                 style={{backgroundImage: `url(${film.mainImage})`, width: '350px'}}>
                                                <div className={styles.rating}
                                                     style={{backgroundColor: film.rating > 7 ? '#02ad02' : '#7c7b7b'}}>{film.rating}</div>
                                            </div>
                                            <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                        </Link>
                                    </div>
                                )
                    }
                </div>
                <div className={styles.buttonSlider}
                     style={{display: `${filtered.length <= 3 || filtered.length === 0 ? 'none' : ''}`}}>
                    <Button cb={nextHandler}>
                        <i className='bx bxs-chevron-right'></i>
                    </Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MainIndex;