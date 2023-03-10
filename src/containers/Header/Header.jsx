import Search from "../../components/UI/Search/Search";
import style from './Header.module.scss'
import Profile from "../../components/elements/Profile/Profile";
import logoKatFlix from "../../assets/images/katflix.png"
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {CustomContext} from "../../context/Context";


const Header = () =>{

    const {user} = useContext(CustomContext);
    const [sideBar, setSideBar] = useState(false);

   return (
       <div className={style.header__fixed}>
       <div className={style.header}>
           <div>
               <Link to="/main">
                   <img src={logoKatFlix}
            alt="Katflix"
            height='35'
            width='130'
                   />
               </Link>
               <Search/>
           </div>
          <div className={style.profile}>
              {
                  user.name.length
                      ?
                          <Profile sideBar={sideBar} setSideBar={setSideBar}/>
                      :
                      <Link to="/login">
                          Войти
                      </Link>
              }

          </div>
       </div>
       </div>
   )
}

export default Header;