import React from 'react'
import "./Welcome.style.css"
import { Link, useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className='px-28 pt-8'>
            <div className='text-3xl font-bold my-4 font-figtree'>Logo</div>
            <button onClick={() => navigate(-1)}>
                <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                <span className='text-purple text-xl font-figtree font-bold'>Back</span>
            </button>
            <div className='flex'>
                <div className='mt-12 w-[55%]'>
                    <div className='font-figtree text-[34px] text-purple font-extrabold my-2'>WELCOME TO TRIPBOING!</div>
                    <div className='font-figtree text-gray text-[26px] font-bold w-[70%]'>Find deals that match your travel style!</div>
                    <div className='text-gray my-2 text-xl'>Lorem ipsum dolor sit amet, consectetuer </div>
                    <Link to='/airport'><button className='my-3 bg-purple py-2.5 text-white px-14 rounded-full'>Continue</button></Link>
                </div>
                <div className='w-[45%] mb-9'>
                    <img src="/Images/Group 1000007338.png" alt="" height={800} width={800} />
                </div>
            </div>
        </div>
    )
}

export default Welcome