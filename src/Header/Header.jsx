import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center bg-slate-800 h-20 text-white'>
                <h4 className='ml-24 text-2xl'>Meal DB</h4>
                <div className='me-24 flex flex-row gap-5'>
                    <a href="">About US</a>
                    <a href="">Order Now</a>
                    <a href="">Menu</a>
                    <a href="">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Header;