import {Link} from "react-router-dom";
import style from "./LoginPage.module.scss";
import logoKatFlix from "../../../assets/images/katflix.png";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {CustomContext} from "../../../context/Context";
import PulseLoader from "react-spinners/PulseLoader";
import backImg from "../../../assets/images/films.jpg";


const LoginPage = () => {

    const {loginUser} = useContext(CustomContext);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    useEffect(() =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
        },1000)
    },[])

    return(
        <div>
            <img src={backImg} className={style.img_back} />
        <div className={style.loginPage}>
            {loading ? <PulseLoader size={20} loading={loading} color={'#c62e21'} className={style.loader}/> :
                <div className={style.loginForm}>
                    <Link to="/">
                        <img src={logoKatFlix}
                             alt="Katflix"
                             height='50'
                             width='200'
                        />
                    </Link>
                    <form onSubmit={handleSubmit(loginUser)}>
                        <h2>Вход в аккаунт</h2>
                        <div className={style.inputBox}>
                            <input {...register('email')} type="email" placeholder="Введите e-mail"/>
                        </div>
                        <div className={style.inputBox}>
                            <input {...register('password')} type="password" placeholder="Введите пароль"/>
                        </div>
                        <button type="submit">Войти</button>
                    </form>
                    <span>
                Нет аккаунта? <Link to={"/register"}> Зарегистрироваться можно здесь</Link>
            </span>
                </div>
            }
        </div>
        </div>
    )
}

export default LoginPage;