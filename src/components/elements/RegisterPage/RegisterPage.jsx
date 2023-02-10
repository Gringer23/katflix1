import style from "./RegisterPage.module.scss";
import {Link} from "react-router-dom";
import logoKatFlix from "../../../images/katflix.png";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {CustomContext} from "../../../Context";
import PulseLoader from "react-spinners/PulseLoader";

const RegisterPage = () => {

    const {registerUser, password, setPassword, passwordConfirm, setPasswordConfirm, isError} = useContext(CustomContext);
    const {
        register,
        handleSubmit,
        formState:{
            errors,
        },
    } = useForm({
        mode: "onBlur"
    });
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
        },2000)
    },[])

    return(
      <div className={style.registerPage}>
          { loading ? <PulseLoader size={20} loading={loading} color={'#c62e21'} className={style.loader}/> :
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
                        <input {...register('email', {
                            required: "Это поле обязательно"
                        })} type="email" placeholder="Введите e-mail"/>
                        <div style={{top: '-30px', position: 'relative'}}>
                            {
                                errors?.email && <span>{errors?.email?.message || 'Error!'}</span>
                            }
                        </div>
                        <input {...register('name', {
                            required: "Это поле обязательно",
                            minLength: {
                                value: 5,
                                message: "Имя должно содержать больше 5 символов"
                            }
                        })} type="text" placeholder="Введите Имя"/>
                        <div style={{top: '-30px', position: 'relative'}}>
                            {
                                errors?.name && <span>{errors?.name?.message || 'Error!'}</span>
                            }
                        </div>
                        <input {...register('tel')} type="tel" placeholder="Введите номер телефона"/>
                        <input {...register('password', {
                            required: 'Это поле обязательно',
                            minLength: {
                                value: 8,
                                message: "Пароль должен содержать больше 8 символов"
                            },
                            pattern: {
                                value: /[A-Za-z][1234567890]/,
                                message: "Пароль должен содержать латинские символы и цифры"
                            },
                        })} type="password" placeholder="Введите пароль" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <div style={{top: '-30px', position: 'relative'}}>
                            {
                                errors?.password && <span>{errors?.password?.message || 'Error!'}</span>
                            }
                        </div>
                        <input type="password" placeholder="Подтвердите пароль" value={passwordConfirm}
                               onChange={(e) => setPasswordConfirm(e.target.value)}/>
                        <div style={{top: '-30px', position: 'relative'}}>
                            <span>{isError}</span>
                        </div>
                        <button type="submit">Регистрация</button>
                    </form>
                    <span>Уже есть аккаунт? <Link to="/login"> Войти</Link></span>

                </div>
        }</div>
    )
}

export default RegisterPage;