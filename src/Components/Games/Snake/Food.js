import React from 'react';
import styles from "./snake.module.css"

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  }

  return (
    <div className={styles.snakeFood} style={style}/>
  )
}