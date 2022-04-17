import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import toast from 'react-hot-toast';
const Register = () => {
    const [lock, setLock] = useState(false)
    /* ==================== Email and Password  =============  */
    const Navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirm: '',
    })

    const [errorInfo, setErrorInfo] = useState({
        email: '',
        password: '',
        confirm: '',
    })
    const handelEmail = (e) => {
        const email = (/\S+@\S+\.\S+/).test(e.target.value)
        if (email) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrorInfo({ ...errorInfo, email: '' })
        } else {
            setUserInfo({ ...userInfo, email: '' })
            setErrorInfo({ ...errorInfo, email: 'sorry email not found' })
        }
    }
    const handelPassword = (e) => {
        const Password = e.target.value
        if (Password.length >= 6) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrorInfo({ ...errorInfo, password: '' })
        } else {
            setUserInfo({ ...userInfo, password: '' })
            setErrorInfo({ ...errorInfo, password: 'sorry password not found' })
        }

    }
    const handelConfirm = (e) => {
        const result = userInfo.password
        const Confirm = e.target.value
        if (Confirm === result) {
            setUserInfo({ ...userInfo, confirm: e.target.value })
            setErrorInfo({ ...errorInfo, confirm: '' })
        } else {
            setUserInfo({ ...userInfo, confirm: '' })
            setErrorInfo({ ...errorInfo, confirm: 'password did nt match' })
        }



       
    }
    const Register = (e) => {
        const email = userInfo.email
        const password = userInfo.confirm
        if (email === '' || password === '') {
            toast.error("Enter You Email")
            return;
        } else {
            createUserWithEmailAndPassword(email, password)
        }
        e.preventDefault()
    }
    /* ====================== user  ==================  */
   
    useEffect(() => {
        if (error?.message) {
            toast.error("email-already-in-use")
        }
    }, [error])

    /* ============================= Github ============================= */
    const [signInWithGithub, GithubUser] = useSignInWithGithub(auth);
    const Github = () => {
        signInWithGithub()
        Navigate('/')
        toast.success("success")

    }
    
    if (user || GithubUser) {
        Navigate('/')
        toast.success("success")
    }

    return (
        <div className=' w-[300px] p-5 py-10 mt-20  mx-auto register bg-emerald-300'>
            <h1 className='text-3xl text-center text-slate-500 font-mono font-semibold'>Register</h1>
            <form>
                <div className='text-slate-500 font-mono font-semibold'>
                    <div className='my-2'>
                        <label htmlFor="email">Enter  Email</label>
                        <input onChange={handelEmail} className='w-[100%] input-style py-2 px-2' type="email" id="email" required />
                        <p className='text-[12px] text-red-600'>
                            {errorInfo.email}
                        </p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Enter  Password</label>
                        <input onChange={handelPassword} className='w-[100%] input-style py-2 px-2 relative' type={lock ? 'text' : 'password'} id="pd" required />

                        <span onClick={() => setLock(!lock)} className='absolute mt-2 ml-[-25px] '>
                            {
                                lock ? <FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon> : <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            }
                        </span>
                        <p className='text-[12px] text-red-600'>{errorInfo.password}</p>

                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Confirm Password</label>
                        <input onChange={handelConfirm} className='w-[100%] input-style py-2 px-2 relative' type={lock ? 'text' : 'password'} id="pd" required />
                        <p className='text-[12px] text-red-600'>{errorInfo.confirm}</p>

                    </div>
                    <button onClick={Register} className='w-[100%] text-center text-white font-mono font-semibold bg-slate-400 py-1 rounded-lg'>Register</button>
                </div>
                <p className='text-center text-slate-500 font-mono font-semibold'>Login account <Link className='text-xl text-red-400' to='/login'>Login</Link></p>
            </form>
            <div onClick={Github} className='flex justify-center items-center py-2 mt-2 rounded-lg text-slate-500 font-mono font-semibold bg-white cursor-pointer '>
                <p>Github</p>
                <img className='w-[30px] mx-2' src={require('../../img/github.png')} alt="colorful google logo transparent clipart download @transparentpng.com" />
            </div>
        </div>
    );
};

export default Register;