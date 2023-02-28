import style from './Search.module.scss'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import the from '../../../images/logo_tlou.png'

const Search = () =>{

    const [movie, setMovie] = useState([]);

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
    const [value, setValue] = useState('');
    const filter = movie.filter(film => {
        return film.rusName.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <div>
        <div className={style.search}>
            <div>
                <i className='bx bx-search-alt'></i>
                <input type='text' placeholder='Я ищу...'
                onChange={(e) => setValue(e.target.value)}
                value={value}/>
                <div className={style.autoComplete} style={{display: `${value ? '' : 'none'}`}}>
                    {
                        value && filter.length !== 0 ?
                            filter.map((film => {
                                return(
                                    <div className={style.autoComplete__list}>
                                        <Link to={`/film/${film.id}/${film.name}`}>
                                        <img src={film.mainImage} width="70px"/>
                                        <li key={film.id} className={style.autoComplete__item}>{film.rusName}</li>
                                        </Link>
                                    </div>
                                )
                            })):
                            <div className={style.autoComplete__list}>
                            <li className={style.autoComplete__item}>По вашему запросу ничего не нашлось...</li>
                            </div>

                    }
            </div>
            </div>
            <i className='bx bx-customize'></i>

        </div>
           </div>
    )
}

export default Search;