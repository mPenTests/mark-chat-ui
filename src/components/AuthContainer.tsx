import React from 'react'
import Login from './Login';
import Register from './Register';
import { motion } from 'framer-motion';


interface AuthContainerProps {
  type: string;
}

function AuthContainer({ type }: AuthContainerProps) {
  return (
    <div
      className={
        "w-full flex h-screen justify-center items-center bg-no-repeat bg-center bg-cover"
      }
    >
      <motion.div
        animate={{ scale: [0, 1], rotate: [0, 360] }}
        transition={{ duration: 1 }}
        className="w-fit h-fit rounded-lg p-4 shadow-2xl"
        style={{ backgroundColor: "rgb( 34, 30, 29 )" }}
      >
        {type === "login" ? (
          <h2 className="text-center mb-10">Welcome Back</h2>
        ) : (
          "Register"
        )}
        {type === "login" ? <Login /> : <Register />}
      </motion.div>
    </div>
  );
}

export default AuthContainer