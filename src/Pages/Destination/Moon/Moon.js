import React from 'react';
import Moons from '../Moons/Moons';

const Moon = () => {
    const moon = {
        name: 'MOON',
        detail: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        km: '384,400 km',
        day: '3 days',
        img: 'https://i.ibb.co/vDcttFC/real-Moon-removebg-preview.png'
    };
    return (
        <div>
          <Moons moons={moon}></Moons>
        </div>
    );
};

export default Moon;