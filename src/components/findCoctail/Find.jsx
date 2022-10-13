import React from 'react'
import s from './find.module.scss'
import logo from '../../imgs/logo.jpg'
import Coctail from '../allCoctails/Coctail'

export default function Find({ fInput, sInput, tInput, updatefInput, updateSInput, updateTInput, userCoctail, findUserCoctail }) {
    let firstI = React.createRef();
    let secI = React.createRef();
    let thI = React.createRef();

    let changeF = () => {
        let mess = firstI.current.value;
        updatefInput(mess)
    }

    let changeS = () => {
        let mess = secI.current.value;
        updateSInput(mess)
    }

    let changeT = () => {
        let mess = thI.current.value;
        updateTInput(mess)
    }

    let findCoctail = () => {
        findUserCoctail()
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>your ingridients</h1>
            <div className={s.content}>
                <div className={s.input_block}>
                    <input type="text" ref={firstI} onChange={changeF} value={fInput} placeholder='...'/>
                    <input type="text" ref={secI} onChange={changeS} value={sInput} placeholder='...'/>
                    <input type="text" ref={thI} onChange={changeT} value={tInput} placeholder='...'/>
                </div>
                <div className={s.logo_block}>
                    <img src={logo} alt="logo" className={s.logo} />
                </div>
                
            </div>
            <div className={s.button_block}>
                <button onClick={findCoctail} className={s.find}>find</button>
            </div>



            <div className={s.container_coctail}>
                {
                    userCoctail.map(e => {
                        return (
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
        </div>
    )
}
