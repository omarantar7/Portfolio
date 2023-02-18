import classes from './Button.module.css';
import React from 'react';

const Button:React.FC<{children:any}> = (props) => {
  return (
    <button className={classes.btn}>{props.children}</button>
  )
}

export default Button