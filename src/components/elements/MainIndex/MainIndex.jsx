import styles from './MainIndex.module.scss';
import Header from "../Header/Header";
import Sidebar from "../../UI/SideBar/Sidebar";
import {useEffect, useState} from "react";
import ComedyComplitation from "../Complitation/ComedyComplitation";
import PopularComplitation from "../Complitation/PopularComplitation";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";


const MainIndex = () => {

    const [movie, setMovie] = useState([]);
    const [sideBar, setSideBar] = useState(false);
    const [value, setValue] = useState('');

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
        axios.get('http://localhost:3001/Data').then((res) => {
            const rand = shuffle(res.data);
            setMovie(rand);
        })
    }, []);

    const filter = movie.filter(film => {
        return film.rusName.toLowerCase().includes(value.toLowerCase());
    })

    return (
        <div>
            <Header onChange={(e) => setValue(e.target.value)}/>
            <div className={styles.wrapper}>
                <Sidebar
                sideBar={sideBar}
                setSideBar={setSideBar}/>
                <div className={styles.wrapper_genre}>
                    {
                            movie.length < 1 ? <PulseLoader size={20} loading={true} color={'#c62e21'} className={styles.loader}/> :
                                filter.length === 0 ? <span style={{color: '#fff'}}>По вашему запросу ничего не нашлось</span> :
                                    <>
                                        <PopularComplitation value={value} movie={movie} />
                                        <ComedyComplitation value={value} movie={movie}/>
                                    </>
                    }
                </div>

            </div>
        </div>
    );
};

export default MainIndex;