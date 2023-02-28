import Search from "../../UI/Search/Search";
import style from './Header.module.scss'
import Profile from "../Profile/Profile";
import logoKatFlix from "../../../images/katflix.png"
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {CustomContext} from "../../../Context";


const Header = () =>{

    const {user} = useContext(CustomContext);
    const [sideBar, setSideBar] = useState(false);

   return (
       <div className={style.header__fixed}>
       <div className={style.header}>
           <div>
               <Link to="/">
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