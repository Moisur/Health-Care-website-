import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 p-10 text-center'>
            <div className=' md:pt-32'>
                <h1 className='text-5xl mb-4'>Not Found</h1>
                <Link className='bg-stone-600 text-white px-5 py-2 rounded'  to='/'>Back</Link>
            </div>
            <div >
                <img src={require('../../img/Notfound.webp')}alt="" />
            </div>
        </div>
    );
};

export default NotFound;