import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../UI/SideBar/Sidebar";
import PulseLoader from "react-spinners/PulseLoader";


const Serials = () => {

    const {serial} = useParams();
    const [serials, setSerials] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/Data?type=Serial').then(res => setSerials(res.data));
    }, [serial]);

    const [Bar, setBar] = useState(false);
    const [value, setValue] = useState('');
    const filtered = serials.filter(filterSerial =>{
        return filterSerial.rusName.toLowerCase().includes(value.toLowerCase());
    });

    return(
        <div >
            <Header onChange={(e)=> setValue(e.target.value)}/>
            <div className={styles.wrapper}>
                <Sidebar
                    sideBar={Bar}
                    setSideBar={setBar}/>
                <div className={styles.film} >
                    {
                        serials.length === 0 ? <PulseLoader size={20} loading={true} color={'#c62e21'} className={styles.loader}/> :
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

export default Serials;