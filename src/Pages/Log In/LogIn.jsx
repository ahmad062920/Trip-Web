import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate();
  return (
    <div>
       <div className='px-28 pt-8'>
                <div className='text-3xl font-bold my-6 font-figtree'>Logo</div>
                    <button onClick={() => navigate(-1)}>
                        <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                        <span className='text-purple text-xl font-figtree font-bold'>Back</span>
                    </button>
            </div>
            <div className='flex '>
                <div className='mt-12 w-1/2 pl-28'>
                    <div className='font-figtree text-[34px] text-purple font-extrabold my-6 w-3/4 leading-10'>Log In</div>
                    <div className='font-figtree text-gray text-xl h-max font-thin my-4 w-2/3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum </div>
                    <div className='text-[#C5C5C5] my-2 w-[65%] font-figtree font-medium '><input type="text" placeholder='Enter your email' className='text-[#C5C5C5] border-2 border-[#D9D9D9] outline-none w-full p-4 rounded-full text-center' /></div>
                    <div className='w-[65%] my-3'><Link to='/otpLogin'><button className='bg-purple py-4 text-white font-semibold w-full px-14 rounded-full font-figtree'>Let's Start!</button></Link></div>
                <div className='font-figtree text-gray text-xl my-4'>Don’t  have an account?&ensp;<span className='font-bold'>Sign Up</span></div>
                </div>
                <div className='w-1/2 pr-20'>
                    <img className='float-right' src="/Images/Group 1000007343.png" alt="" height={380} width={380} />
                </div>
            </div>
    </div>
  )
}

export default LogIn