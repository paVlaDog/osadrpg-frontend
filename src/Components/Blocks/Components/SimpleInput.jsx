import React from 'react'
import styles from "../Styles/SimpleInput.module.css";

const SimpleInput = ({val, setVal, ...props}) => {
  return (
    <input className={styles.simpleInput} value={val} onChange={(e) => {setVal(e.target.value)}} {...props}/>
  )
}

export default SimpleInput