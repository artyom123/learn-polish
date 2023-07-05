import { ButtonView } from './buttonView.tsx'

interface ButtonContainerProps {
    title: string
    isActive?: boolean
    isDisabled?: boolean
    onClick: (value: any) => void
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ title, isActive = false, isDisabled = false, onClick }) => {
    const handleClick = () => {
        onClick(title)
    }

    return <ButtonView title={title} isActive={isActive} isDisabled={isDisabled} onClick={handleClick}/>
}

ButtonContainer.displayName = 'ButtonContainer'
export default ButtonContainer
