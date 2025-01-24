import React from 'react'
import styles from "../Styles/Header.module.css";

const Header = ({location, setLocation, authentificateUser, setAuthentificateUser}) => {
  function checkActive(pageName) {
      return location === pageName ? styles.active : styles.nonactive
  }

  return (
    <header className={styles.header}>
      {/* <div> */}
        <nav className={styles.navbar}>
          <h3 onClick={() => {setLocation("header")}} className={checkActive("header")}>{"Главная"}</h3>
          <h3 onClick={() => {
            authentificateUser === "" ?
            setLocation("enter") :
            setLocation("character")
          }} 
            className={checkActive("character")}
          >{"Персонаж"}</h3>
          <h3 onClick={() => {setLocation("library")}} className={checkActive("library")}>{"Справочник"}</h3>
        </nav>

        <nav className={styles.navbar}>
          {authentificateUser === "" && <h4 onClick={() => {setLocation("enter")}} className={checkActive("enter")}>{"Войти"}</h4>}
          {authentificateUser === "" && <h4 onClick={() => {setLocation("register")}} className={checkActive("register")}>{"Зарегестрироваться"}</h4>}
          {authentificateUser !== "" && <h4>{authentificateUser}</h4>}
          {authentificateUser !== "" && <h4 onClick={() => {setLocation("enter");setAuthentificateUser("")}}>{"Выйти"}</h4>}
        </nav>
      {/* </div> */}
    </header>
  )
}

export default Header