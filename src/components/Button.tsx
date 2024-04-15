import React from 'react'

const Button: React.FC<ButtonType> = ({
  children,
  type = 'button',
  textColor = 'text-white',
  bgColor = "bg-btnGradient",
  className = '',
  ...props
}) => {
  return (
    <div>
      <button
        type={type}
        className={`  w-full p-4 font-Montserrat font-semibold text-base ${textColor} ${bgColor} ${className}`}
        {...props}
      >{children}</button>
    </div>
  )
}

export default Button;