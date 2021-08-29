import React from 'react'
import { Link } from 'react-router-dom'
import { MainW } from '../styleW/allWrapper'

const Header = () => {
    return (
        <MainW>
            <div className='dashboard'>
                <ul>
                    <li>
                        <Link to='/'>
                        <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/orders'>
                        <p>Orders</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </MainW>
    )
}

export default Header
