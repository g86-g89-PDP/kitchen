import React from 'react'
import { Link } from 'react-router-dom'
import { MainW } from '../styleW/allWrapper'
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
    return (
        <MainW>
            <div>
            <div className='dashboard'>
                <ul>
                    <li>
                        <Link to='/'>
                        <p><AiOutlineHome/></p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/orders'>
                        <p>Orders</p>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to='/settings'>
                        <p>Settings</p>
                        
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </MainW>
    )
}

export default Header
