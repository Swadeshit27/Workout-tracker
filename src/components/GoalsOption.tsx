import Input from './Input'

interface optionType {
    value: string,
    // isChecked: boolean
}

const GoalsOption = ({ value }: optionType) => {
    return (
        <div className=' relative'>
            <Input
                type='text'
                readOnly
                value={value}
            />
            <input
                type='checkbox'
                // checked={isChecked}
                className=' absolute top-3.5 right-3.5 h-5 w-5 '
            />
        </div>
    )
}

export default GoalsOption
