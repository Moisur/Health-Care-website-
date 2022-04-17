import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            <div className='w-[100px] mx-auto md:pt-32'>
                <h1 className='text-5xl mb-4'>Not Found</h1>
                <Link to='/home' className='text-xl font-mono font-bold py-2 px-8 rounded bg-emerald-400 text-white '>Home</Link>
            </div>
            <div >
                <img src={require('../../img/Notfound.webp')}alt="" />
            </div>
        </div>
    );
};

export default NotFound;