import React from 'react'
import { useSelector } from 'react-redux';


const Grill = () => {
    const grill = useSelector(state => state.grill);

    return (
        <div>
            <div className="row">
        
                {grill.map((v,i)=>{
                return  <div className="col-lg-4 col-md-6 col-sm-12" key={i}> 
                <div className='imgCard1'>
                <div className='imgCard2'>
                <img src={v.img} alt="" className='Img' />

                <div className='infMeal'>
                    <p className='imgword1 text-center'>{v.name}</p>
                    <p className='imgword1'>{v.price}</p>
                    <p className='imgword2'>20 Bowls available</p>   
                </div>

                </div>
            </div>
            </div>
            })}
            </div>
        
        </div>
    )
}

export default Grill
