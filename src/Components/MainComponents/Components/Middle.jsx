import React from 'react'
import { useState } from 'react';
import styles from "../Styles/Middle.module.css";
import Aside from './Aside';
import MainPage from '../../Pages/Components/MainPage';
import CharacterPage from '../../Pages/Components/CharacterPage';
import EnterPage from '../../Pages/Components/EnterPage';
import RegisterPage from '../../Pages/Components/RegisterPage';

const Middle = ({location, authentificateUser, setAuthentificateUser, setIsUserAdmin, setLocation}) => {
    const [autentificateChar, setAutintificateChar] = useState("")
    const [autentificateCharData, setAutintificateCharData] = useState()

    return (
        <div className={styles.middle}>
            <main className={styles.mainMain}>
                <div className={styles.mainInformationBlock}>
                    {location === "main" && <MainPage/>}
                    {location === "character" && autentificateChar === "" && <CharacterPage authentificateUser = {authentificateUser}/>}
                    {location === "character" && autentificateChar !== "" && <CharacterPage authentificateUser = {authentificateUser}/>}
                    {location === "enter" && <EnterPage 
                        setAuthentificateUser = {setAuthentificateUser} 
                        setIsUserAdmin = {setIsUserAdmin}
                        setLocation = {setLocation}
                    />}
                    {location === "register" && <RegisterPage 
                        setAuthentificateUser = {setAuthentificateUser} 
                        setIsUserAdmin = {setIsUserAdmin}
                        setLocation = {setLocation}
                    />}
                    {location === "library" && <div>Просто справочник</div>}
                </div>
            </main>
        </div>
    )
}

export default Middle