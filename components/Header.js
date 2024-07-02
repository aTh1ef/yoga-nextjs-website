import React from 'react';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex justify-center items-center h-20">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text animate-gradient font-sans text-uppercase"> YOGIC-GUIDE </h1>
      <style jsx>
        {`
          .animate-gradient {
            background-image: linear-gradient(to right, #f44336, #e91e63, #9c27b0, #4361ee);
            animation: gradient 5s ease-in-out infinite alternate;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 0%;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
