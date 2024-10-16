import React from 'react'
import "./OTPLogin.style.css"
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from '../../Components/OTP/OTPInput';

const OTPLogin = () => {
    const navigate = useNavigate();
    return (
      <div>
         <div className='px-28 pt-8'>
                  <div className='text-3xl font-bold my-6 font-figtree'>Logo</div>
                      <button onClick={() => navigate(-1)}>
                          <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                          <span className='text-purple text-xl font-figtree'>Back</span>
                      </button>
              </div>
              <div className='flex'>
                  <div className='mt-16 w-1/2  pl-28'>
                      <div className='font-figtree text-[34px] text-purple font-extrabold my-2 w-3/4 leading-10'>Continue with your Account</div>
                      <div className='font-figtree text-gray text-xl h-max font-thin my-4 w-[70%]'>Enter the verification code we have sent you to <span className='font-bold'>ahmednimra95@gmail.com</span> to login</div>
                      <div className='my-5 w-3/5 font-figtree font-medium '><OTPInput length={4} /></div>
                      <div className='w-[64%] my-3'><Link to='/subscription'><button className='bg-purple py-[11px] text-[14px] font-medium text-white px-[68px] rounded-full font-figtree'>Log in</button></Link></div>
                  <div className='font-figtree text-gray text-xl mt-4'>Didn't recieve OTP?&ensp;<span className='font-bold'>Resend</span></div>
                  </div>
                  <div className='w-1/2 pr-10'>
                      <img className='float-right' src="/Images/Character_2_Studying.png" alt="" height={520} width={520} />
                  </div>
              </div>
      </div>
    )
}

export default OTPLogin