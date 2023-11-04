import React from 'react'
import { useState } from 'react';

const ButtonComponent = ({ setShowModal }) => {

    const buttonHandle = () => {
        setShowModal(true);
      };
    return (
        <div className="relative">
            <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-10 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
                onClick={buttonHandle}
            >
                Start Recording
            </button>
        </div>
    );
}

export default ButtonComponent
