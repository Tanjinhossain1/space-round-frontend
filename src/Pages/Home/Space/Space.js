import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Space = () => {
    const imgUrl = 'https://i.ibb.co/KKqLZnx/space-3.jpg';
    const navigate = useNavigate()
    const handleExplore = () =>{
        navigate('/destination')
    }
    return (
        <div>
            {/* h-[691px] */}

            <div style={{
                backgroundImage: `url(${imgUrl})`
            }} className=' text-white bg-no-repeat '>
                <div className='flex py-40  justify-around'>
                    <div className='w-1/4 mt-12'>
                        <h1 className='text-8xl'>SPACE</h1>
                        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div>
                        <button onClick={handleExplore} className='border bg-white text-black text-2xl px-28 py-36 rounded-[700px] hover:bg-[#0D0525] hover:text-white  duration-700 ease-in-out'>EXPLORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Space;