import style from './SideBar.module.scss'
import {Link} from "react-router-dom";


const menu =[
    {
        id: 1,
        name: 'Popular',
        rusName: 'Популярное'
    },
    {
        id: 2,
        name: 'Films',
        rusName: 'Фильмы'
    },
    {
        id: 3,
        name: 'Serials',
        rusName: 'Сериалы'
    },
    {
        id: 4,
        name: 'Favorite',
        rusName: 'Избранное'
    },

]

const Sidebar = ({sideBar, setSideBar}) =>{
    return (
        <div className={style.sidebar} style={{width: sideBar ? '15%' : '10%', transition: '.3s all'}}>
            <button onClick={() => setSideBar(!sideBar)}>
                <i className={`bx bx-${sideBar ? 'x' : 'menu-alt-left'}`}></i>
            </button>
            <ul className={sideBar ? style.show : ''}>
                {menu.map(title =>(
                    <li key={title.id}>
                        <Link to={`/${title.name}`}>{title.rusName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Sidebar