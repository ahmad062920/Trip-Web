import React, { useEffect, useState } from 'react'
import "./OTPEmail.style.css"
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from '../../Components/OTP/OTPInput';

const OTPEmail = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(60); // Starting at 60 seconds
  const [isActive, setIsActive] = useState(true); // Timer starts active automatically

  useEffect(() => {
    let timer = null;

    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000); // Decrease by 1 every second
    } else if (seconds === 0) {
      clearInterval(timer); // Stop the timer when it reaches 0
    }

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [isActive, seconds]);

  const resetTimer = () => {
    if(seconds==0){
    setIsActive(true); // Keep timer active
    setSeconds(60); // Reset to 60 seconds
  }
};

    return (
        <div className='px-28 pt-8'>
            <div className='text-3xl font-bold my-4 font-figtree'>Logo</div>
            <button onClick={() => navigate(-1)}>
                <span><img src="/Images/Vector 41.svg" alt="pic" className='float-start mt-1.5 mr-4' height={10} width={10} /></span>
                <span className='text-purple text-xl font-figtree'>Back</span>
            </button>
            <div className='flex flex-col justify-center items-center p-5'>
                <div className='font-figtree text-[34px] text-purple font-extrabold my-2'>Continue with your account</div>
                <div className='font-figtree text-[20px] text-gray w-[38%] text-center my-2'>Enter the verification code we have sent you to <span className='font-bold'>ahmednimra95@gmail.com</span> to login</div>
            <div className='my-3'>
            <OTPInput length={4} />
            </div>
            <Link to='/welcome' className='my-2 w-[34.5%]'><button className='w-full bg-purple py-[19px] text-white px-16 rounded-full'>Log In</button></Link>
            <div className='my-2 text-gray text-xl'>Didn’t receive OTP?&emsp;<button onClick={resetTimer} className='font-bold'>Resend</button></div>
            {seconds > 0 && (
          <div className='text-gray w-1/4 text-center leading-5'>
            Request for a new OTP available in 00:
            {seconds < 10 ? `0${seconds}` : seconds} Sec
          </div>
        )}
        {(seconds ? <div></div> :
          <button className="text-purple underline font-bold" onClick={resetTimer} >
            Resend OTP via SMS
          </button>
        )}
            </div>
        </div>
    )
}

export default OTPEmail