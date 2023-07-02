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
      <motion.div
        className={`w-full flex h-screen justify-center relative overflow-hidden items-center`}
        style={{backgroundSize: "100vw 100vh"}}
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