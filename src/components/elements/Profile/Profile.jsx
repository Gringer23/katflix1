import style from './Profile.module.scss'
import {useContext} from "react";
import {CustomContext} from "../../../context/Context";
import Avatar from "../../UI/Avatar/Avatar";

const Profile = ({sideBar, setSideBar}) => {

    const {user, logOutUser} = useContext(CustomContext);


    return(
        <div className={style['profile-wrapper']}>
            <div className={style.notification}>
            <i className='bx bxs-bell'></i>
            <span></span>
            </div>
            <div className={style.profile}>
                <div>
                    <Avatar/>
                </div>
                <div className={style.log}>
                    <button onClick={() => setSideBar(!sideBar)}>
                <i className={`bx bx-caret-${sideBar ? 'up' : 'down'}`}></i>
                    </button>
                    <div className={sideBar? style.show : style.sideBar}>
                        <div className={style.barInfo}>
                        <span>Привет, {user.name}</span>
                        <span style={{marginTop: '10px'}} className={style.logout} onClick={() => logOutUser()}>Выйти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;