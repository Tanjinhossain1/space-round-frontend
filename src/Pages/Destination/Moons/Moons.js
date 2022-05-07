import React from 'react';

const Moons = ({moons}) => {
    const {name,detail,km,img,day} = moons
    return (
        <div className='flex justify-evenly py-28 items-center'>
            <div>
                <img width={500} className='' src={img} alt="" />
            </div>
            <div className='w-1/4'>
           <div>
           <h1 className='text-8xl'>{name}</h1>
            <h1>{detail}</h1>
           </div>
           <hr className='my-12'/>
          <div className='flex justify-between text-2xl'>
          <h1>{km}</h1>
            <h1>{day}</h1>
          </div>
            </div>
        </div>
    );
};

export default Moons;