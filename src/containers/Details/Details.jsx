import style from './Details.module.scss'

const Details = ({movie}) => {


    return(
        <div className={style.Details}>
            <img src={movie.logo} alt={movie.name} width='300' style={{opacity: .7, filter: `${movie.id === '5' ? 'brightness(140)' : ''}`}}/>
            <div className={style.wrapper}>
                <div className={style.about}>
                    <span>{movie.about}</span>
                </div>
                <div className={style.role}>
                <span>В главных ролях</span>
                <ul className={style.ul}>
                    {
                        movie.role.map((role) =>
                            <li key={role.toString()}>{role}</li>
                        )
                    }

                </ul>
                </div>
            </div>
        </div>
    )
}

export default Details;