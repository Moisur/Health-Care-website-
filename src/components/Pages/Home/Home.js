import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='containers'>
                <div className='px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    <div className='p-10 md:mt-20'>
                        <h1 className='text-white font-bold  font-mono text-4xl'>Health <span className='text-red-600'>Care</span> Services</h1>
                        <p className=' py-5 font-sans text-slate-200 font-bold  text-xl'>High-quality health care helps prevent diseases and improve quality of life</p>
                        <Link  to='/about' className='text-xl font-mono font-bold py-2  px-5 rounded bg-emerald-400 text-white '>About</Link>
                    </div>
                    <div className='mb-10'>
                        <div className='sm:flex w-[50%] mx-auto gap-6 md:mx-10'>
                            <img className='animate-bounce  w-[200px]  p-2 rounded-lg shadow-2xl' src={require('../../img/doctor-14118.png')} alt="" />
                            <img className='animate-bounce w-[200px] p-2 rounded-lg shadow-2xl' src={require('../../img/doctor-14083.png')} alt="" />
                        </div>
                        <img className='animate-bounce w-[200px] mx-auto  mt-6 p-2 rounded-lg shadow-2xl' src={require('../../img/doctor-14128.png')} alt="" />
                    </div>
                </div>
            </div>
            <h1 className='text-center font-mono text-5xl text-emerald-400 font-bold   mt-20 underline '>Services</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-36 px-5">
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img src={require('../../img/Pulmonary.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1 rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Pulmonary</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img src={require('../../img/Cardiology.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1 rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Cardiology</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link  to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img src={require('../../img/Cosmetic Solutions.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1 rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Cosmetic Solutions</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img src={require('../../img/Eye-png.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1 rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Eye png</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img src={require('../../img/Dental.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1 rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Eye png</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link  to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                <div className=" border-2 p-5 shadow-lg relative rounded-md mb-36 ">
                    <img  src={require('../../img/Ear.png')}
                        className='w-[90px] absolute top-[-12%] md:top-[-15%] left-[40%] bg-emerald-400 p-1  rounded-full' alt="" />
                    <h1 className='text-4xl font-mono text-center py-5  font-bold'>Eye png</h1>
                    <p className='w-20 h-1 bg-pink-600 mx-auto  mb-3'></p>
                    <p className='text-md font-serif mb-5 text-slate-700'>“Pulmonary” means “in the lungs,” and “hypertension” means “high blood pressure.” Pulmonary hypertension is an increase in pressure in the blood vessels that carry blood to the lungs. It is a serious health problem. Pulmonary arteries are the blood vessels that carry blood from your heart to your lungs.</p>
                    <div className='text-center'>
                        <Link  to='/services' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white '>Buy Now</Link>
                    </div>
                </div>
                                  
            </div>
        </div>


    );
};

export default Home;