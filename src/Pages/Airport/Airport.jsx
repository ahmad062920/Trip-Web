import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom'

const Airport = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='px-28 pt-8'>
                <div className='text-3xl font-bold my-4 font-figtree'>Logo</div>
                <div className='flex justify-between'>
                    <button onClick={() => navigate(-1)}>
                        <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                        <span className='text-purple text-xl font-figtree font-bold'>Back</span>
                    </button>
                    <div className='font-figtree text-xl text-gray font-bold '>Step 1 of 2</div>
                </div>
            </div>
            <div className='flex'>
                <div className='mt-16 w-1/2 pl-28'>
                    <div className='font-figtree text-[34px] text-purple font-extrabold my-2 w-3/4 leading-10'>Add Your Airport Preferences</div>
                    <div className='font-figtree text-gray text-xl h-max font-thin my-4'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxxxx</div>
                    <div className='text-[#D9D9D9] my-2 w-3/5 text-xs '><input type="text" placeholder='Search here' className='border border-[#D9D9D9] outline-none w-full p-4 rounded-full' /></div>
                    <div className="relative inline-block mt-6 mb-4">
                        <button className="flex items-center border border-purple text-purple px-14 py-3 rounded-full text-[10px] relative">
                            KHI - Karachi
                        </button>
                        <span className="absolute top-1 right-6 transform translate-x-1/2 -translate-y-1/2 bg-purple rounded-full p-1">
                            <RxCross2 className="cursor-pointer h-3 w-3 text-white" />
                        </span>
                    </div>
                    <div><Link to='/unlock'><button className='bg-purple py-2.5 text-[14px] text-white px-[58px] rounded-full'>Continue</button></Link></div>
                </div>
                <div className='w-1/2'>
                    <img className='float-right mt-24' src="/Images/Group 1000007418.png" alt="" height={630} width={630} />
                </div>
            </div>
        </div>
    )
}

export default Airport