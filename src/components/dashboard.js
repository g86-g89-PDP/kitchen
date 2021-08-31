import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MainW } from '../styleW/allWrapper'
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

const Header = () => {

    return (
        <MainW>
            <div>
                <div className='dashboard'>
                    <ul>
                        <li>
                            <Link to='/'>
                                <div className='dashboardSm'>
                                    <p><AiOutlineHome /></p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/orders'>
                                {/* <div className={asPath == to ? "dashboardSm" : ""}>
                                    <p><AiOutlineHome /></p>
                                </div> */}

                            </Link>
                        </li>
                        <li>
                            <Link to='/settings'>
                                <p><AiOutlineSetting /></p>

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </MainW>
    )
}

export default Header
