import style from './NavigationBottom.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const tabs = [
    {
        _id: 1,
        name: 'Overview',
    },
    {
        _id: 2,
        name: 'Episodes',
    },
    {
        _id: 3,
        name: 'Details'
    },
]

const NavigationBottom = ({activeTab, setActiveTab}) => {

    const {id} = useParams();
    const [film, setFilm] = useState([]);
    useEffect(() =>{
        axios.get(`http://localhost:3001/Data/${id}`).then(data => setFilm(data.data));
    }, [id]);

    let tab = [];

    if(film.photos){
         tab = tabs.map(tab => {
            return(
                <button
                    key={tab._id}
                    onClick={() => setActiveTab(tab._id)}
                    className={activeTab === tab._id ? style.active : ''}
                >
                    {tab.name}
                </button>
            )
        })
    }else{
        tab = tabs.filter(tab =>{
        return(
            tab._id !== 2
        )});
        tab = tab.map(tab => {
            return (
                <button
                    key={tab._id}
                    onClick={() => setActiveTab(tab._id)}
                    className={activeTab === tab._id ? style.active : ''}
                >
                    {tab.name}
                </button>
            )
        })
    }

    return (
        <nav className={style.nav}>
            {tab}
        </nav>
    )
}

export default NavigationBottom;