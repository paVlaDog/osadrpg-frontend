import React, { useState } from 'react'
import axios from 'axios'
import SimpleInput from '../../Blocks/Components/SimpleInput';
import SimpleButton from '../../Blocks/Components/SimpleButton';
import styles from "../Styles/RegisterPage.module.css";
import textStyles from "../../../GlobalStyles/TextStyles.module.css";


const RegisterPage = ({setAuthentificateUser, setIsUserAdmin, setLocation}) => {
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function register(){
        axios.post('https://api.osadrpg.ru/user/register', {
            login: login,
            email: email,
            password: password
        })
        .then(response => {
            if (response.data.success !== true) {
                setError(response.data.error)
            } else {
                setAuthentificateUser(response.data.login)
                setIsUserAdmin(response.data.admin)
                setLocation("character")
            }
        })

        setLogin("")
        setEmail("")
        setPassword("")
        setError("")
    }

    return (
        <div className={styles.enterPage}>
            <div className={textStyles.bigBoldRedText}>Регистрация</div>
            <div>
                <span className={textStyles.boldRedText}>Логин:</span>
                <SimpleInput val={login} setVal={setLogin}/>
            </div>
            <div>
                <span className={textStyles.boldRedText}>Почта:</span>
                <SimpleInput val={email} setVal={setEmail}/>
            </div>
            <div>
                <span className={textStyles.boldRedText}>Пароль:</span>
                <SimpleInput val={password} setVal={setPassword}/>
            </div>
            {error !== "" && <div>{error}</div>}
            <SimpleButton onClick={() => {register()}} type={"button"}>Зарегестрироваться</SimpleButton>
        </div>
    )
}

export default RegisterPage