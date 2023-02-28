import style from './Main.module.scss'
import Button from "../../UI/Button/Button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setFilmToFavorite , removeFilmFromFavorite} from "../../../store/action";
import {useContext} from "react";
import {CustomContext} from "../../../Context";


const Information = ({movie, favoriteFilm, setFavoriteFilm}) => {

    const dispatch = useDispatch();
    const {user} = useContext(CustomContext);

    const addHandleClick = () =>{
        dispatch(setFilmToFavorite({
            [movie.id]: {
                name: movie.rusName,
                img: movie.mainImage,
                rusName: movie.rusName,
                rating: movie.rating
            }
        }));
        setFavoriteFilm(true);
    }

    const deleteHandleClick = () => {
        dispatch(removeFilmFromFavorite(movie.id));
        setFavoriteFilm(false);
    }



    return (
        <div className={style.info}>
            <img src={movie.logo} alt={movie.name} width='300' style={{opacity: .7, filter: `${movie.id === '5' ? 'brightness(140)' : ''}`}}/>

            <div className={style.additional}>
                <span>{movie.year}</span>
                <span>{movie.limitAge}</span>
                <span style={{backgroundColor : movie.rating > 7 ? '#02ad02' : '#7c7b7b',
                    color: '#fff',
                    padding: '2px 10px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center'
                }}>{movie.rating}</span>
                {
                    movie.series ? <span>{movie.series}</span> : ''
                }
                <span>{movie.duration}</span>
            </div>

            <div className={style.description}>{movie.description}</div>
            {
                user.name.length > 0 ?
                    <div className={style.buttons}>
                        <Link to={`/watch/${movie.name}`}>
                            <Button>
                                <i className='bx bx-play' style={{color: '#c62e21'}}></i>
                                <span>Смотреть онлайн</span>
                            </Button>
                        </Link>
                        {
                            favoriteFilm ? <Button cb={deleteHandleClick}>
                                    <i className='bx bxs-heart'></i>
                                    <span>Убрать из избранного</span>
                                </Button> :
                                <Button cb={addHandleClick}>
                                    <i className='bx bx-heart'></i>
                                    <span>В избранное</span>
                                </Button>
                        }
                    </div>
                    : <div className={style.buttons}>
                    <span style={{color:'#9b9a97', fontSize: '20px'}}>Чтобы начать просмотр,
                        <Link to="/login"> нужно войти</Link>
                    </span>
                    </div>
            }

        </div>
    )
}

export default Information;