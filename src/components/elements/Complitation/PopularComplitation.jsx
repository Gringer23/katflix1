import {useRef, useState} from "react";
import style from './Complitation.module.scss';
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";

const PopularComplitation = ({movie}) => {

    const [offset, setOffset] = useState(0);
    const ref = useRef('');
    const position = 390;

    const genreFilter = movie.filter(movie => {
        return movie.genre[0].includes(ref.current.innerText);
    });

    const items = genreFilter;

    const prevSlideHandler = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset + position;
            return Math.min(newOffset, 0);
        })
    }

    const nextHandler = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset - position;
            const maxOffset = -(position * (items.length - 3));
            return Math.max(newOffset, maxOffset);
        })
    }

    return (
        <>

            <h2 ref={ref} className={style.title} style={{display: `${genreFilter.length === 0 ? 'none' : ''}`}}>Популярное</h2>
            <div className={style.popular}>
                <div className={style.buttonSlider}
                     style={{display: `${genreFilter.length <= 3 || genreFilter.length === 0 ? 'none' : ''}`}}>
                    <Button cb={prevSlideHandler}>
                        <i className='bx bxs-chevron-left'></i>
                    </Button>
                </div>
                <div className={style.films}>
                    {
                                genreFilter.map(film =>
                                    <div key={film.id} className={style.filmLib}
                                         style={{transform: `translateX(${offset}px)`}}>
                                        <Link to={`film/${film.id}/${film.name}`}>
                                            <div key={film.id} className={style.main}
                                                 style={{backgroundImage: `url(${film.mainImage})`, width: '350px'}}>
                                                <div className={style.rating}
                                                     style={{backgroundColor: film.rating > 7 ? '#02ad02' : '#7c7b7b'}}>{film.rating}</div>
                                            </div>
                                            <span style={{marginTop: '1rem'}}>{film.rusName}</span>
                                        </Link>
                                    </div>
                                )
                    }
                </div>
                <div className={style.buttonSlider}
                     style={{display: `${genreFilter.length <= 3 || genreFilter.length === 0 ? 'none' : ''}`, left: '10px'}}>
                    <Button cb={nextHandler}>
                        <i className='bx bxs-chevron-right'></i>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PopularComplitation;