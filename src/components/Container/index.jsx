import React from 'react'
import style from './style.module.scss';
const Container = ({children}) => {
  return (
    <section className={style.container}>
      {children}
    </section>
  )
}

export default Container
