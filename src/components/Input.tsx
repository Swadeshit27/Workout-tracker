import React, { useId, forwardRef } from 'react'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, inputType> = ({
    placeholder,
    type = "text",
    className = '',
    ...props
}, ref) => {
    const id = useId()
    return (
        <div>
            <input
                id={id}
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={` bg-[#F1F1F1] w-full p-4 rounded-lg outline-none placeholder:text-xs placeholder:text-lightGray font-Montserrat text-xs  font-semibold ${className}`}
                {...props}
            />
        </div>
    )
}

export default forwardRef(Input)