import {Link} from "react-router-dom";
import style from "./LoginPage.module.scss";
import logoKatFlix from "../../../images/katflix.png";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext} from "react";
import {CustomContext} from "../../../Context";


const LoginPage = () => {

    const {loginUser} = useContext(CustomContext);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    return(
        <div className={style.loginPage}>
            <Link to="/">
                <img src={logoKatFlix}
                     alt="Katflix"
                     height='100'
                     width='350'
                />
            </Link>
            <form onSubmit={handleSubmit(loginUser)}>
                <h2>Вход в аккаунт</h2>
                <input {...register('email')} type="email" placeholder="Введите e-mail"/>
                <input {...register('password')} type="password" placeholder="Введите пароль"/>
                <button type="submit">Войти</button>
            </form>
            <span>
                Нет аккаунта? <Link to={"/register"}> Зарегистрироваться можно здесь</Link>
            </span>
        </div>
    )
}

export default LoginPage;