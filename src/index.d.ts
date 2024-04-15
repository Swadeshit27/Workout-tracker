interface inputType {
    placeholder?: string,
    type?: string,
    className?: string,
    readOnly?: boolean
    value?: string
    // props: {
    //     onChange: () => void
    // }
}

interface ButtonType {
    children?: string | React.ReactNode,
    type?: "submit" | "reset" | "button",
    textColor?: string,
    bgColor?: string,
    className?: string, 
    onClick?: () => void
}