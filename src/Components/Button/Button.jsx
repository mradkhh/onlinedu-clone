import React from 'react'

const Button = ({type, text}) => {
  return (
    <>
        <button dataType={type}>{text}</button>
    </>
  )
}

export  {Button}