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
}

export default MainIndex;