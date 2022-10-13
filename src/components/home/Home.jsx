import React from 'react'
import s from './home.module.scss'
import logo from '../../imgs/logo.jpg'
import github from '../../imgs/github.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
      <div className={s.container}>
          <h1 className={s.title}>Choose an option</h1>
          <div className={s.contetnt}>
              <div className={s.button_block}>
                  <Link to='/allcoctails' className={s.button}>See all</Link>
                  <Link to='/find' className={s.button}>Find coctail</Link>
              </div>
              <div className={s.logo_block}>
                  <img src={logo} alt="logo" className={s.logo} />
              </div>
          </div>
          <a href="https://github.com/Vas11a" target='_blanc' className={s.block_gitHub}>
              <img src={github} alt="gitHub" className={s.gitHub} />
          </a>
      </div>
  )
}
