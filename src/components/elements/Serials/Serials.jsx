import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../UI/SideBar/Sidebar";
import PulseLoader from "react-spinners/PulseLoader";
import Button from "../../UI/Button/Button";


const Serials = () => {

    const {serial} = useParams();
    const [serials, setSerials] = useState([]);
    const [offset, setOffset] = useState(0);
    const position = 390;
    useEffect(() =>{
        axios.get('http://localhost:3001/Data?type=Serial').then(res => setSerials(res.data));
    }, [serial]);

    const [bar, setBar] = useState(false);
    const [value, setValue] = useState('');
    const filtered = serials.filter(filterSerial =>{
        return filterSerial.rusName.toLowerCase().includes(value.toLowerCase());
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
            const maxOffset = -(position * (serials.length - 3));
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
                    <h2 className={styles.title}>Сериалы</h2>
                    <div className={styles.pop}>
                        <div className={styles.buttonSlider}
                             style={{display: `${filtered.length <= 3 || filtered.length === 0 ? 'none' : ''}`}}>
                            <Button cb={prevSlideHandler}>
                                <i className='bx bxs-chevron-left'></i>
                            </Button>
                        </div>
                        <div className={styles.film}>
                    {
                        serials.length === 0 ? <PulseLoader size={20} loading={true} color={'#c62e21'} className={styles.loader}/> :
                        filtered.map(film =>
                            <div key={film.id} className={styles.filmLib}
                                 style={{transform: `translateX(${offset}px)`}}>
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
                        <div className={styles.buttonSlider}
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

export default Serials;