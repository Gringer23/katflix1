import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import styles from "../MainIndex/MainIndex.module.scss";
import Sidebar from "../../UI/SideBar/Sidebar";


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
                        filtered.map(film =>
                            <div key={film.id} className={styles.filmLib}>
                                <Link to={`/film/${film.id}/${film.name}`}>
                                    <img key={film.id} src={film.mainImage} width='350' alt={film.name}/>
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