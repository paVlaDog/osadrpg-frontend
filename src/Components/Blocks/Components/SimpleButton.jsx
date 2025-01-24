import React from 'react'
import styles from "../Styles/SimpleButton.module.css";

const SimpleButton = ({children, ...props}) => {
  return (
    <button className={styles.simpleButton} {...props}>{children}</button>
  )
}

export default SimpleButton