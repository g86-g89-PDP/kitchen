import React from 'react'
import Dashboard from './dashboard'
import { MainW } from '../styleW/allWrapper'

const All = ({children}) => {
    return (
        <MainW>
            <Dashboard/>
            <div className='rightPage'>
                {children}
            </div>
        </MainW>
    )
}

export default All
