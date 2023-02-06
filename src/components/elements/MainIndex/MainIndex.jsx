import styles from './MainIndex.module.scss';
import Header from "../Header/Header";
import Sidebar from "../../UI/SideBar/Sidebar";
import {useState} from "react";
import {Data} from "../../../data";
import {Link} from "react-router-dom";



const MainIndex = () =>{
    const [sideBar, setSideBar] = useState(false);

    const [value, setValue] = useState('');

    const filtered = Data.filter(film =>{
    return film.rusName.toLowerCase().includes(value.toLowerCase());
    });

    return(
        <div >
            <Header onChange={(e)=> setValue(e.target.value)}/>
            <div className={styles.wrapper}>
            <Sidebar
                sideBar={sideBar}
                setSideBar={setSideBar}/>
            <div className={styles.film} >
                {
                    filtered.map(film =>
                        <div key={film.id} className={styles.filmLib}>
                           <Link to={`film/${film.id}/${film.name}`}>
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
}

export default MainIndex;