import style from './Search.module.scss'


const Search = ({onChange, value}) =>{


    return (
        <div className={style.search}>
            <div>
                <i className='bx bx-search-alt'></i>
                <input type='text' placeholder='Я ищу...'
                onChange={onChange}
                value={value}/>
            </div>
            <i className='bx bx-customize'></i>

        </div>
    )
}

export default Search;