import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import { motion } from 'framer-motion';

interface AuthContainerProps {
  type: string;
}

function AuthContainer({ type }: AuthContainerProps) {
  const [startAnimation, setStartAnimation] = useState<boolean>(false)

  return (
    <>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={startAnimation && { opacity: [0, 1] }}
        transition={{ duration: 2 }}
        id="visual"
        className="inline absolute z-10 top-0 left-0"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#021321"></rect>
        <defs>
          <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stop-color="#021321" stop-opacity="1"></stop>
            <stop offset="80%" stop-color="#021321" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
            <stop offset="20%" stop-color="#021321" stop-opacity="1"></stop>
            <stop offset="80%" stop-color="#021321" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(900, 0)">
          <path
            d="M0 459.7C-75.5 440 -151.1 420.4 -222 384.5C-292.9 348.7 -359.3 296.6 -398.1 229.9C-437 163.1 -448.3 81.5 -459.7 0L0 0Z"
            fill="#cc8b29"
          ></path>
        </g>
        <g transform="translate(0, 600)">
          <path
            d="M0 -459.7C76.1 -441 152.1 -422.2 223 -386.2C293.9 -350.3 359.5 -297.1 398.1 -229.9C436.7 -162.6 448.2 -81.3 459.7 0L0 0Z"
            fill="#cc8b29"
          ></path>
        </g>
      </motion.svg>
      <motion.div
        className={`w-full flex h-screen justify-center relative items-center bg-auth-background bg-no-repeat bg-center bg-cover`}
      >
        <motion.div
          animate={{ scale: [0, 1], rotate: [0, 360] }}
          initial={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-fit h-fit rounded-lg p-4 shadow-2xl inline relative z-20"
          style={{ backgroundColor: "rgb( 34, 30, 29 )" }}
          onAnimationComplete={() => setStartAnimation(true)}
        >
          {type === "login" ? (
            <h2 className="text-center mb-10">Welcome Back</h2>
          ) : (
            "Register"
          )}
          {type === "login" ? <Login /> : <Register />}
        </motion.div>
      </motion.div>
    </>
  );
}

export default AuthContainer