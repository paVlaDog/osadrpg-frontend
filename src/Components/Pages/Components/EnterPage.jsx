import React, { useState } from 'react'
import axios from 'axios'
import SimpleInput from '../../Blocks/Components/SimpleInput';
import SimpleButton from '../../Blocks/Components/SimpleButton';
import styles from "../Styles/EnterPage.module.css";
import textStyles from "../../../GlobalStyles/TextStyles.module.css";

const EnterPage = ({setAuthentificateUser, setIsUserAdmin, setLocation}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function enter(){
        axios.post('https://api.osadrpg.ru/user/enter', {
            login: login,
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
        setPassword("")
        setError("")
    }

    return (
        <div className={styles.enterPage}>
            <div className={textStyles.bigBoldRedText}>Войти в аккаунт</div>
            <div>
                <span className={textStyles.boldRedText}>Логин:</span>
                <SimpleInput val={login} setVal={setLogin}/>
            </div>
            <div>
                <span className={textStyles.boldRedText}>Пароль:</span>
                <SimpleInput val={password} setVal={setPassword}/>
            </div>
            {error !== "" && <div>{error}</div>}
            <SimpleButton onClick={() => {enter()}} type={"button"}>Войти</SimpleButton>
        </div>
    )
}

export default EnterPage