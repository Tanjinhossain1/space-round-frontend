import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const imgUrl  = 'https://media.istockphoto.com/photos/star-sky-at-night-space-background-picture-id841403680?b=1&k=20&m=841403680&s=170667a&w=0&h=XjTDHhmVPGUxqYqGEClDlLR4otM9mP7uPl3sbeNtEvA='
    return (
        <div className=' py-2 text-white font-semibold text-xl' style={{
            backgroundImage: `url(${imgUrl})`
        }}>
            <div className='flex justify-between w-3/4 mx-auto items-center'>
                <div>
        <FontAwesomeIcon className='w-10 h-10' icon={faShuttleSpace}/>
                </div>
                <div>
                    <Link to='/space'>Space</Link>
                    <Link className='mx-12' to='/destination'>Destination</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;