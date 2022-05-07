import React from 'react';
import Moons from '../Moons/Moons';

const Titan = () => {
    const titan = {
        name: 'TITAN',
        detail: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        km: '1.6 BIL. km',
        day: '7 years',
        img: 'https://i.ibb.co/sjstvfV/titan-removebg-preview.png'
    };
    return (
        <div>
           <Moons moons={titan}></Moons>
        </div>
    );
};

export default Titan;