import React from 'react'
import style from './style.module.scss'
const Banner = ({background}) => {
  return (
    <div className={style.banner} style={{backgroundImage: `url('assets/image/Banner-${background}.png')`}}>
        
    </div>
  )
}

export default Banner
