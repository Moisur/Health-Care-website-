import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const [lock, setLock] = useState(false)
    return (
        <div className=' w-[300px] p-5 py-10 mt-20  mx-auto register bg-emerald-300'>
            <h1 className='text-3xl text-center text-slate-500 font-mono font-semibold'>Register</h1>
            <form>
                <div className='text-slate-500 font-mono font-semibold'>
                    <div className='my-2'>
                        <label htmlFor="email">Enter  Email</label>
                        <input className='w-[100%] input-style py-2 px-2' type="email" id="email" required />
                        <p className='text-[12px] text-red-600'>
                        </p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Enter  Password</label>
                        <input className='w-[100%] input-style py-2 px-2 relative' type={lock ? 'text' : 'password'} id="pd" required />

                        <span onClick={() => setLock(!lock)} className='absolute mt-2 ml-[-25px] '>
                            {
                                lock ? <FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon> : <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            }
                        </span>
                        <p className='text-[12px] text-red-600'></p>

                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Confirm Password</label>
                        <input className='w-[100%] input-style py-2 px-2 relative' type={lock ? 'text' : 'password'} id="pd" required />
                        <p className='text-[12px] text-red-600'></p>

                    </div>
                    <button className='w-[100%] text-center text-white font-mono font-semibold bg-slate-400 py-1 rounded-lg'>Register</button>
                </div>
                <p className='text-center text-slate-500 font-mono font-semibold'>Login account <Link className='text-xl text-red-400' to='/login'>Login</Link></p>
            </form>
            <div className='flex justify-center items-center py-2 mt-2 rounded-lg text-slate-500 font-mono font-semibold bg-white '>
                <p> Google with</p>
                <img className='w-[30px] mx-2' src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="colorful google logo transparent clipart download @transparentpng.com" />
            </div>
        </div>
    );
};

export default Register;