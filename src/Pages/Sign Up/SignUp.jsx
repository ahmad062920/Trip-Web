import React from 'react'
import "./SignUp.style.css"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div className='px-28 pt-8'>
            <div className='text-3xl font-bold my-4 font-figtree'>Logo</div>
            <button onClick={()=>navigate(-1)}>
                <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1 mr-4' height={11} width={11} /></span>
                <span className='text-purple text-xl font-figtree'>Back</span>
            </button>
            <div className='flex flex-col justify-center items-center py-2'>
                <div className='font-figtree text-[34px] text-purple font-extrabold my-1'>Getting Started</div>
                <div className='font-figtree text-xl text-gray'>xxxxxxxxxxxxxxxxxxxxxxx</div>
                <div className='mt-2 w-1/3'><input type="text" placeholder='Enter your email' className='border border-gray text-center outline-none w-full p-5 rounded-full text-[#C5C5C5]' /></div>
                <Link to='/otpEmail' className='my-3 w-1/3'><button className='w-full bg-purple py-5 text-white px-16 rounded-full'>Let's Start!</button></Link>
                <div className="flex items-center justify-center w-1/3 my-2">
                    <hr className="border-t-2 border-[#D9D9D9] flex-grow" />
                    <span className="mx-9 text-[#D9D9D9]">or</span>
                    <hr className="border-t-2 border-[#D9D9D9] flex-grow" />
                </div>
                <div className='flex my-2'>
                    <button className='px-3 py-1.5 rounded-md border border-[#D9D9D9] mx-3'><img src="/Images/google logo.png" alt="logo" height={45} width={45} /></button>
                    <button className='px-3 py-1.5 rounded-md border border-[#D9D9D9] mx-3'><img src="/Images/Vector.png" alt="logo" height={45} width={45} /></button>
                </div>
                <div className='text-center text-[19px] mt-4 flex justify-center'>
                    <div><input type="checkbox" className='h-7 w-7 mx-3 bg-[#6F6F6F]' /></div>
                    <div className='font-figtree'>
                        <span className='text-[#6E6E6E]'>By registering you accept our </span>
                        <span className='text-purple'>terms and Conditions </span>
                        <span className='text-[#6F6F6F]'>and </span>
                        <span className='text-purple'>Privacy policy</span>
                    </div>
                </div>
                <div className='font-figtree text-center text-[19px] text-[#6F6F6F] my-1'>
                    <span>Already have an account</span>&emsp;
                    <span className='font-bold'>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default SignUp