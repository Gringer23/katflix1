import style from './Button.module.scss'

const Button = ({ children, cb, disabled }) => {
    return(
        <button onClick={cb} className={style.button} disabled={disabled}>

            {children}
        </button>
    )
}

export default Button;