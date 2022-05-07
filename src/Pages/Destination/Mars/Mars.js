import React from 'react';
import Moons from '../Moons/Moons';

const Mars = () => {
    const mars = {
        name: 'MARS',
        detail: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        km: '225 MIL. km',
        day: '9 MONTHS',
        img: 'https://i.ibb.co/KFgVK1h/marsplanate-removebg-preview.png'
    };
    return (
        <div>
          <Moons moons={mars}></Moons>
        </div>
    );
};

export default Mars;