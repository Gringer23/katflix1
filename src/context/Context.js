import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();

export const Context = (props) =>{

    const [user, setUser] = useState({
        name : ""
    });
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isError, setIsError] = useState('');
    const nav = useNavigate();

    useEffect(() =>{
        if(localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')))
        }else{
            setUser({ name: ""})
        }

    },[]);

    const registerUser = (data) =>{
        axios.post('http://localhost:3001/register' , {...data})
            .then((res) => {
                if(password === passwordConfirm){
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    setUser(res.data.user);
                    nav('/main');
                }
                setIsError('Пароли не совпададют');
            });
    }

    const loginUser = (data) => {
        axios.post('http://localhost:3001/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user);
                nav('/main')
            })
    }

    const logOutUser = () => {
        localStorage.removeItem('user');
        setUser({
            name : "",
        })
    }

    const value = {
        user,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm,
        isError,
        setUser,
        logOutUser,
        registerUser,
        loginUser
    };

    return(
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );

}