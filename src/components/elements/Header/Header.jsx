import Search from "../../UI/Search/Search";
import style from './Header.module.scss'
import Profile from "../Profile/Profile";
import logoKatFlix from "../../../images/katflix.png"
import {Link} from "react-router-dom";

const Header = ({onChange}) =>{

   return (
       <div className={style.header}>
           <div>
               <Link to="/">
                   <img src={logoKatFlix}
            alt="Katflix"
            height='35'
            width='130'
                   />
               </Link>
               <Search onChange={onChange}/>
           </div>
           <Profile/>
       </div>
   )
}

export default Header;