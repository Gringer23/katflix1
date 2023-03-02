import style from './NavigationBottom.module.scss'
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {CustomContext} from "../../../context/Context";

const tabs = [
    {
        _id: 1,
        name: 'О Сериале',
        film: 'О фильме'
    },
    {
        _id: 2,
        name: 'Серии',
    },
    {
        _id: 3,
        name: 'Детали',
        film: 'Детали'
    },
]

const NavigationBottom = ({activeTab, setActiveTab}) => {

    const {id} = useParams();
    const {user} = useContext(CustomContext);
    const [film, setFilm] = useState([]);
    useEffect(() =>{
        axios.get(`http://localhost:3001/Data/${id}`).then(data => setFilm(data.data));
    }, [id]);

    let tab = [];

    if(film.photos && user.name.length){
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
                    {tab.film}
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