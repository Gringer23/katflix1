import style from "./RegisterPage.module.scss";
import {Link} from "react-router-dom";
import logoKatFlix from "../../../images/katflix.png";
import {useForm} from "react-hook-form";

import {useContext} from "react";
import {CustomContext} from "../../../Context";

const RegisterPage = () => {

    const {registerUser} = useContext(CustomContext);

    const {
        register,
        handleSubmit,
        setError:{
            errors
        },
        reset
    } = useForm();

    return(
        <div className={style.registerPage}>
            <Link to="/">
                <img src={logoKatFlix}
                     alt="Katflix"
                     height='100'
                     width='350'
                />
            </Link>
            <form onSubmit={handleSubmit(registerUser)}>
                <h2>Регистрация</h2>
                <input {...register('email')} type="email" placeholder="Введите e-mail"/>
                <input {...register('name')} type="text" placeholder="Введите Имя"/>
                <input {...register('tel')} type="tel" placeholder="Введите номер телефона"/>
                <input {...register('password')} type="password" placeholder="Введите пароль"/>
                <input  type="password" placeholder="Подтвердите пароль"/>
                <button type="submit">Регистрация</button>
            </form>
            <span>Уже есть аккаунт? <Link to="/login"> Войти</Link></span>
        </div>
    )
}

export default RegisterPage;