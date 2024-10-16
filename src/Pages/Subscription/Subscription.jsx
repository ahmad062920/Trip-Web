import React from 'react'
import { useNavigate } from 'react-router-dom'

const Subscription = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='px-28 pt-8'>
                <div className='text-3xl font-bold my-6 font-figtree'>Logo</div>
                <div className='flex justify-between'>
                    <button onClick={() => navigate(-1)}>
                        <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                        <span className='text-purple text-xl font-figtree font-bold'>Back</span>
                    </button>
                    <div className='font-figtree text-xl text-gray font-bold'>Skip for now</div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-6'>
                <div className='font-figtree text-[34px] text-purple font-extrabold my-2'>Choose Your Subscription Plan</div>
                <div className='font-figtree text-xl text-gray my-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing </div>
                <div className='px-1 bg-slate-200 rounded-full flex justify-between my-3'>
                    <div className='font-figtree py-2 px-6 text-[14px] text-purple font-[600]'>Monthly</div>
                    <div className='px-3 py-1.5 my-1 bg-purple text-[14px] rounded-full font-figtree'><span className='px-1 text-white'>Yearly</span><span className='text-[#FFB82F]'>-20%</span></div>
                </div>
                <div className='flex justify-center w-3/4 my-8'>
                    <div className='w-[28%] h-max py-5 mx-2 border border-[#D9D9D9] flex flex-col justify-center items-center px-6 rounded-md'>
                        <div className='my-3 ml-12'><img src="/Images/rocket.svg" alt="pic" height={75} width={75} /></div>
                        <div className='font-figtree text-[28px] text-purple font-bold '>Free</div>
                        <div className='font-figtree font-bold text-xl text-gray'>$0/ mo</div>
                        <div className='font-figtree text-gray text-[13px] text-center my-2 leading-4'>Lorem ipsum dolor sit amet, consectetuer adipi</div>
                    </div>
                    <div className='w-[28%] h-max py-3 mx-2 border border-[#D9D9D9] flex flex-col justify-center items-center p-6 rounded-md relative'>
                        <div className='absolute -top-4 bg-purple text-white font-figtree py-1.5 px-7 rounded-full text-sm'>
                            Most Popular
                        </div>
                        <div className='my-3'>
                            <img className='ml-12 mt-' src="/Images/Group 1.png" alt="pic" height={90} width={90} />
                        </div>
                        <div className='font-figtree text-3xl text-purple text-[28px] font-bold my-1'>
                            Premium
                        </div>
                        <div className='font-figtree font-bold text-xl text-gray my-1'>
                            $400/ mo
                        </div>
                        <div className='font-figtree text-gray my-2 text-[13px] leading-4 text-center'>
                            Lorem ipsum dolor sit amet, consectetuer adipi
                        </div>
                    </div>

                    <div className='w-[28%] h-max py-[18px] mx-2 border border-[#D9D9D9] flex flex-col justify-center items-center px-6 rounded-md relative '>
                        <div className='absolute -top-4 text-purple bg-white border border-[#D9D9D9] font-figtree py-1.5 px-7 rounded-full text-sm font-semibold'>
                            Luxury Travel
                        </div>
                        <div className='my-3'>
                            <img className='ml-5' src="/Images/Group 2.png" alt="pic" height={80} width={80} />
                        </div>
                        <div className='font-figtree text-3xl text-[28px] text-purple font-bold my-1'>
                            Elite
                        </div>
                        <div className='font-figtree font-bold text-xl text-gray my-1'>
                            $700/ mo
                        </div>
                        <div className='font-figtree text-gray my-2 text-[13px] leading-4 text-center'>
                            Lorem ipsum dolor sit amet, consectetuer adipi
                        </div>
                    </div>

                </div>
                <div className='w-2/3 pl-12'>
                    <div className='flex mb-8 pl-12'>
                        <div className='w-[25%]'></div>
                        <div className='w-[25%] text-center text-purple text-3xl font-bold'>Free</div>
                        <div className='w-[25%] text-center text-purple text-3xl font-bold'>Premium</div>
                        <div className='w-[25%] text-center text-purple text-3xl font-bold'>Elite</div>
                    </div>
                    <div className='flex my-8 pl-12'>
                        <div className='w-[25%] text-purple text-xl'>Lorem Ipsum</div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>

                    </div>
                    <div className='my-8 border-t border-[#D9D9D9] w-[92%]'></div>
                    <div className='flex my-4 pl-12'>
                        <div className='w-[25%] text-purple text-xl'>Lorem Ipsum</div>
                        <div className='w-[25%] flex justify-center'></div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>

                    </div>
                    <div className='my-8 border-t border-[#D9D9D9] w-[92%]'></div>
                    <div className='flex mt-4 mb-20 pl-12'>
                        <div className='w-[25%] text-purple text-xl'>Lorem Ipsum</div>
                        <div className='w-[25%] flex justify-center'></div>
                        <div className='w-[25%] flex justify-center'></div>
                        <div className='w-[25%] flex justify-center'><img src="/Images/Group 1000007428.png" alt="pic" height={35} width={35} /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription