import React from 'react';

// import logo
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            {/* logo   */}
            <a href='#'>
              <img src={Logo} alt='logo' width={150} height={150} />
            </a>

            {/* button */}
            <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
