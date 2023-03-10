import styles from './MainIndex.module.scss';
import Header from "../../../containers/Header/Header";
import Sidebar from "../../../containers/SideBar/Sidebar";
import {useEffect, useState} from "react";
import ComedyComplitation from "../../../containers/Complitation/ComedyComplitation";
import PopularComplitation from "../../../containers/Complitation/PopularComplitation";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";


const MainIndex = () => {

    const [movie, setMovie] = useState([]);
    const [sideBar, setSideBar] = useState(false);
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // Пока остаются элементы для перемешивания.
        while (currentIndex !== 0) {
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


    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar
                sideBar={sideBar}
                setSideBar={setSideBar}/>
                <div className={styles.wrapper_genre} style={{transition: sideBar ? '.3s all' : ''}}>
                    {
                            movie.length < 1 ? <PulseLoader size={20} loading={true} color={'#c62e21'} className={styles.loader}/> :
                                    <>
                                        <PopularComplitation movie={movie} />
                                        <ComedyComplitation movie={movie}/>
                                    </>
                    }
                </div>

            </div>
        </div>
    );
};

export default MainIndex;