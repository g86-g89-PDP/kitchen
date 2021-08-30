import { Home } from '../styleW/homeW';
import React from 'react'
import Home2 from './../components/home2'
import { RiDeleteBin7Line } from "react-icons/ri";


const Homes = () => {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const vaqt= new Date();
    return (
        <Home>
         
                <div className='homeHead'>
                   <div  className='homeHeadSm'>
                   <div>
                        <p className='dashboardName'>Jaegar Resto</p>
                        <p className='date'>{`${vaqt.toDateString()}, ${vaqt.getHours()}: ${vaqt.getMinutes()} `}</p>
                    </div>
                    <div className='HeaderInpCard'>
                        <input type="text" placeholder='Search for coffe' className='form-control HeaderInp'/>
                    </div>
                   </div>
                   <Home2/>
                </div>
                
                <div className='rightPage1'>
                    <p className='topWord'>Orders #34562</p>
                    <div className='d-flex justif-content-start'>
                       <div>
                       <button className='btn btnLight'>Dine In</button>
                        <button className='btn btnDark'>To Go</button>
                        <button className='btn btnDark'>To Go</button>
                       </div>
                    </div>
                    <div className='d-flex justify-content-between jkl text-light'>
                        <p>Item</p>
                        <div className='d-flex'>
                            <p className='pe-2'>Qty</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className='todoAppCard'>
                        <div className='d-flex p-2 align-items-center'>

                            <img src="meal1.jpg" alt="rasm"  className='todoImg' />

                            <div className='sozlar'>
                                <div className="h-100">
                                    <p className='text-light mb-0 pb-0'>Spicy seasoned sea...</p>
                                <p className='imgword2'>$ 2.29</p>
                                </div>
                            </div>
                          

                            <div className='todoInput '>
                                <input type="text" placeholder='2' className='form-control inp' />
                                <p className='text-light mt-3'>$4.58</p>
                            </div>

                        </div>
                        <div className='d-flex w-100'>
                            <input type="text" className='form-control inp2' placeholder='This meal !' />
                            <button className='btn deleteBtn'><RiDeleteBin7Line/></button>

                        </div>

                        <div className='d-flex p-2 align-items-center'>

                        <img src="meal1.jpg" alt="rasm"  className='todoImg' />

                        <div className='sozlar'>
                            <div className="h-100">
                                <p className='text-light mb-0 pb-0'>Spicy seasoned sea...</p>
                            <p className='imgword2'>$ 2.29</p>
                            </div>
                        </div>


                        <div className='todoInput '>
                            <input type="text" placeholder='2' className='form-control inp' />
                            <p className='text-light mt-3'>$4.58</p>
                        </div>

                        </div>
                        <div className='d-flex w-100'>
                        <input type="text" className='form-control inp2' placeholder='This meal !' />
                        <button className='btn deleteBtn'><RiDeleteBin7Line/></button>

                        </div>

                        <div className='d-flex p-2 align-items-center'>

                        <img src="meal1.jpg" alt="rasm"  className='todoImg' />

                        <div className='sozlar'>
                            <div className="h-100">
                                <p className='text-light mb-0 pb-0'>Spicy seasoned sea...</p>
                            <p className='imgword2'>$ 2.29</p>
                            </div>
                        </div>


                        <div className='todoInput '>
                            <input type="text" placeholder='2' className='form-control inp' />
                            <p className='text-light mt-3'>$4.58</p>
                        </div>

                        </div>
                        <div className='d-flex w-100'>
                        <input type="text" className='form-control inp2' placeholder='This meal !' />
                        <button className='btn deleteBtn'><RiDeleteBin7Line/></button>

                        </div>

                    </div>
                </div>
        
        </Home>
    )
}

export default Homes
