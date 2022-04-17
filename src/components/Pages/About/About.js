import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './about.css'
const About = () => {
    return (
        <div>
            <div className='about-images'>
                <Link to='/' className='text-xl font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white  '>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    <span className='px-2 '>Back</span>
                </Link>
                <img className='rounded-full w-[200px] h-[190px] mx-auto  border mt-44' src={require('../../img/famle-doctor.jpg')} alt="" />
            </div>
            <div className='p-16 mt-20 grid  grid-cols-1 md:grid-cols-2 gap-20 border'>
                <div className='md:px-10 order-2 md:order-none'>
                    <h1>This is my dream</h1>
                    <h1>Google Job</h1>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum architecto officiis inventore, expedita velit voluptas quae, repellendus facere quo atque dolore repudiandae molestias quaerat officia ducimus tenetur consectetur tempore? Officia!</h1>
                </div>
                <div className='order-1 '>
                    <img className='w-[400px] mx-auto border-2' src={require('../../img/i.png')} alt="" />

                </div>
            </div>

        </div>
    );
};

export default About;