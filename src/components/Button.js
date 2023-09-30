import React, { useEffect } from 'react'

const Button = ({ handleClick }) => {
    useEffect(() => {
        console.log('mounted');
        return () => console.log('unmounted'); // cleanup function
    },[]);
  return (
    <button onClick={handleClick}>Toggle User</button>
  )
}

export default Button