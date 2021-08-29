import React from 'react'
import { Home } from '../styleW/homeW';

const Home = () => {
    const vaqt= new Date();
    return (
        <Home>
            <div className='home'>
                <div className='homeHead'>
                    <div>
                        <p className='dashboardName'>Jaegar Resto</p>
                        <p className='date'>{`${vaqt.toDateString()}, ${vaqt.getHours()}: ${vaqt.getMinutes()} `}</p>
                    </div>
                        <div className='HeaderInpCard'>
                        <input type="text" placeholder='Search for coffe' className='form-control HeaderInp'/>
                        </div>
                </div>
                <div className='rightPage'>
                    <p>Assalomu Aleykum</p>
                </div>
            </div>
        </Home>
    )
}

export default Home
