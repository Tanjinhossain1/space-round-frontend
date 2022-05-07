import React, { useState } from 'react';
import Europa from './Europa/Europa';
import Mars from './Mars/Mars';
import Moon from './Moon/Moon';
import Titan from './Titan/Titan';

const Destination = () => {
    const [moons, setMoons] = useState(false);
    const [mars, setMars] = useState(false);
    const [europa, setEuropa] = useState(false);
    const [titan, SetTitan] = useState(false);
    console.log(moons, mars, europa, titan)
    const imgUrl = 'https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg';

    return (
        <div className='w-full text-white h-full' style={{
            backgroundImage: `url(${imgUrl})`
        }}>
            <div>
                {
                    !moons && <Moon></Moon> && !mars && <Moon></Moon> && !europa && <Moon></Moon> && !titan && <Moon></Moon>
                }
            </div>

            <div>
                <div>
                    {moons && <Moon></Moon>}
                </div>
                <div>
                    {mars && <Mars></Mars>}
                </div>
                <div>
                    {europa && <Europa></Europa>}
                </div>
                <div>
                    {titan && <Titan></Titan>}
                </div>

                <div className='flex justify-between w-2/4 pb-4 mx-auto text-2xl'>
                    <button onClick={() => {
                        setMoons(true)
                        SetTitan(false)
                        setEuropa(false)
                        setMars(false)
                    }} className={`border-b-4 ${moons ? 'text-orange-600 border-orange-600' : ''}`}>Moon</button>

                    <button onClick={() => {
                        setMars(!mars)
                        SetTitan(false)
                        setEuropa(false)
                        setMoons(false)
                    }} className={`border-b-4 ${mars ? 'text-orange-600 border-orange-600' : ''}`}>MARS</button>

                    <button onClick={() => {
                        setEuropa(!europa)
                        setMoons(false)
                        SetTitan(false)
                        setMars(false)
                    }} className={`border-b-4 ${europa ? 'text-orange-600 border-orange-600' : ''}`} >EUROPA</button>
                    <button onClick={() => {
                        SetTitan(!titan)
                        setEuropa(false)
                        setMoons(false)
                        setMars(false)
                    }} className={`border-b-4 ${titan ? 'text-orange-600 border-orange-600' : ''}`}>TITAN</button>
                </div>

            </div>

        </div>
    );
};

export default Destination;