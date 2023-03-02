import {useContext} from "react";
import {CustomContext} from "../../../context/Context";
import style from './Avatar.module.scss';


const Avatar = () => {
    const {user} = useContext(CustomContext);
    const firstChar = user.name[0];

    return(
        <div className={style.Avatar}>
            {firstChar}
        </div>
    )
}

export default Avatar;