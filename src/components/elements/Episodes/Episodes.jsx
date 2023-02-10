import style from './Episodes.module.scss'
import Button from "../../UI/Button/Button";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";


const Episodes = ({movie, id}) => {

    const slider = useRef(null);
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const position = 390;


    const prevHandler = () =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset + position;
            return Math.min(newOffset, 0);
        })
    }

    const nextHandler = () =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset - position;
            const maxOffset = -(position * (items.length - 3));

            return Math.max(newOffset, maxOffset);
        })
    }



    useEffect(() => {
       const res = movie.photos.map(photo => {
            return photo.id
        })
        setItems(res);
    },[]);


    return(
        <div className={style.ep}>
            <img src={movie.logo} alt={movie.name} width='300' style={{opacity: .7}}/>
        <div className={style.backEpisode}>
            <div className={style.buttonSlider} style={{left: '25px'}}>
                <Button cb={prevHandler}>
                    <i className='bx bxs-chevron-left'></i>
                </Button>
            </div>
        <div className={style.episodes} key={id}>
            <div className={style.episodeLi} ref={slider}>
            {
                movie.photos.map(photo =>{
                        return(
                            <div key={photo.id} style={{ transform: `translateX(${offset}px)`}} className={style.episode_translition}>
                            <Link to={`/watch/${movie.name}/${photo.id}`}>
                            <div className={style.episodePreview}>
                                <img src={photo.source} width='350' alt={photo.id} />
                                <span className={style.episodeDescription}>{movie.rusName} {photo.id+ ' серия'}</span>
                            </div>
                            </Link>
                            </div>
                        )
                    }
                )
            }
            </div>
        </div>
            <div className={style.buttonSlider} style={{right: '25px'}}>
            <Button cb={nextHandler}>
                <i className='bx bxs-chevron-right' ></i>
            </Button>
            </div>
        </div>
        </div>

    )
}

export default Episodes;