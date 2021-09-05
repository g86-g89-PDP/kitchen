import React from 'react'
import { AiOutlineHeart, AiOutlineHome, AiOutlineControl} from 'react-icons/ai';
import { FaDiscourse } from 'react-icons/fa'
import { BiBell, BiErrorCircle, BiLockOpen } from 'react-icons/bi'

const List = () => {
    return (
        <div>
             <div className="settings">
                {/* 1qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><AiOutlineHeart/></span>
                        <h5>Appereance</h5>
                    </div>
                    <span className="menuText ps-4">Dark and Light mode, Font size</span>
                </div>
                {/* 2qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><AiOutlineHome /></span>
                        <h5>Your Restaurant</h5>
                    </div>
                    <span className="menuText ps-4">Dark and Light mode, Font size</span>
                </div>
                {/* 3qsim */}
                <div className="menu active">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><FaDiscourse className="Discourse" /></span>
                        <h5>Products Manage</h5>
                    </div>
                    <span className="menuText ps-4">Manage your product, pricing</span>
                </div>
                {/* 4qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><BiBell /></span>
                        <h5>Notifications</h5>
                    </div>
                    <span className="menuText ps-4">Customize your notifications</span>
                </div>
                {/* 5qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><BiLockOpen /></span>
                        <h5>Security</h5>
                    </div>
                    <span className="menuText ps-4">Configure Password, PIN, etc</span>
                </div>
                {/* 6qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><BiLockOpen /></span>
                        <h5>Security</h5>
                    </div>
                    <span className="menuText ps-4">Configure Password, PIN, etc</span>
                </div>
                {/* 7qsim */}
                <div className="menu">
                    <div className=" text-light menuName">
                        <span className="pe-2 pb-2 menuIcon"><BiErrorCircle /></span>
                        <h5>About Us</h5>
                    </div>
                    <span className="menuText ps-4">Find out more about Posly</span>
                </div>
            </div>
        </div>
    )
}

export default List
