import React from 'react';
import Moons from '../Moons/Moons';

const Europa = () => {
    const europa = {
        name: 'EUROPA',
        detail: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        km: '628 MIL. km',
        day: '3 YEARS',
        img: 'https://i.ibb.co/5vLY4R2/europa-removebg-preview.png'
    };
    return (
        <div>
           <Moons moons={europa}></Moons>
        </div>
    );
};

export default Europa;