import React from 'react'
import s from './coctails.module.scss'


export default function Coctail({photo, name, ingridients}) {
  return (
      <div className={s.block_coctail}>
          <img src={photo} alt="" className={s.photo} />
          <div className={s.name}>{name}</div>

          <div className={s.ingridiets}>
            {
                ingridients.map(e => {
                    return (
                        <div key={e.id} className={s.line}><span>{e.in}:</span><span>{e.mas}</span></div>
                    )
                })
            }    
          </div>
      </div>
  )
}
