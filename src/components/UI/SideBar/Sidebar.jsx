import style from './SideBar.module.scss'
import {Link} from "react-router-dom";


const menu =[
    'Popular', 'Serials', 'Films', 'Favorite',
]

const Sidebar = ({sideBar, setSideBar}) =>{
    return (
        <div className={style.sidebar} style={{width: sideBar ? '15%' : '10%'}}>
            <button onClick={() => setSideBar(!sideBar)}>
                <i className={`bx bx-${sideBar ? 'x' : 'menu-alt-left'}`}></i>
            </button>
            <ul className={sideBar ? style.show : ''}>
                {menu.map(title =>(
                    <li key={title}>
                        <Link to={`/${title}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Sidebar