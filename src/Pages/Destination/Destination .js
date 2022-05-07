import React, { useState } from 'react';
import Moons from './Moons/Moons';

const Destination = () => {
    const [moons,setMoons] = useState(false);
    const [mars,setMars] = useState(false)
    const [europa,setEuropa] = useState(false)
    const [titan,SetTitan] = useState(false)
    const imgUrl = 'https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg';
    const moon = {
        name: 'MOON',
        detail: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        km: '384,400 km',
        day: '3 days',
        img: 'https://i.ibb.co/vDcttFC/real-Moon-removebg-preview.png'
    }
    return (
        <div className='w-full text-white h-full' style={{
            backgroundImage: `url(${imgUrl})`
        }}>
            <div>
                <div>
                    {moons && <Moons moons={moon}></Moons>}
                </div>
               
                <div className='flex justify-between w-2/4 pb-4 mx-auto text-2xl'>
                    <button onClick={()=>{setMoons(true)
                    SetTitan(false)
                      setEuropa(false)
                         setMars(false)}} className={`border-b-4 ${moons?'text-orange-600 border-orange-600': ''}`}>Moon</button>

                    <button onClick={()=>{setMars(!mars)
                    SetTitan(false)
                      setEuropa(false)
                    setMoons(false)}} className={`border-b-4 ${mars?'text-orange-600 border-orange-600': ''}`}>MARS</button>

                    <button  onClick={()=>{setEuropa(!europa)
                    setMoons(false)
                    SetTitan(false)
                    setMars(false)
                    }} className={`border-b-4 ${europa?'text-orange-600 border-orange-600': ''}`} >EUROPA</button>
                    <button  onClick={()=>{SetTitan(!titan)
                    setEuropa(false)
                    setMoons(false)
                    setMars(false)
                    }} className={`border-b-4 ${titan?'text-orange-600 border-orange-600': ''}`}>TITAN</button>
                </div>
                {mars && <p>ok </p>}
            </div>
        </div>
    );
};

export default Destination;