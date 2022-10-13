import React from 'react'
import Coctail from './Coctail'
import s from './coctails.module.scss'

export default function AllCoctails({ coctailState, maxShow, showMoreMess }) {
        
    let showMore = () => {
        showMoreMess()
    }


    return (
        <div className={s.container}>
            <h1 className={s.title}>See All</h1>

            <div className={s.container_coctail}>
            {
                coctailState.map(e => {
                    return e.id > maxShow ? null :  (
                        <Coctail
                            key={e.id}
                            photo={e.photo}
                            name={e.name}
                            ingridients={e.ingridients}
                        />
                    )

                })
            }
            </div>


            <div className={s.button_block}>
                <button onClick={showMore} className={s.see_more}>See More</button>
            </div>
        </div>
    )
}
