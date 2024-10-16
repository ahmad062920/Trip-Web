import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom'

const Unlock = () => {
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
                    <div className='font-figtree text-xl text-gray font-bold '>Step 2 of 4</div>
                </div>
            </div>
            <div className='flex mb-6'>
                <div className='mt-16 w-1/2 pl-28'>
                    <div className='font-figtree text-[34px] text-purple font-extrabold my-2 w-1/2 leading-10'>Unlock Accommodations You'll Love!</div>
                    <div className='font-figtree text-gray text-xl h-max font-thin my-6'>Craft Your Dream Trip!</div>
                    <div><Link to='/unleash'><button className='bg-[#C5C5C5] hover:bg-purple py-2.5 text-white px-14 rounded-full'>Continue</button></Link></div>
                </div>
                <div className='w-[60%] mr-24 mt-9'>
                    <div className='bg-[#F3F3F3] p-6 flex flex-wrap justify-center overflow-y-scroll h-[430px] custom-scrollbar'>
                    <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                        <div className='w-[28%] my-1 mx-4'>
                            <img className='hover:border-4 border-purple hover:scale-105 rounded-[11px]' src="/Images/Rectangle 3467860.png" alt="pic" height="100%" width="100%" />
                            <div className='text-center my-2 text-gray font-figtree'>Tree House</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unlock