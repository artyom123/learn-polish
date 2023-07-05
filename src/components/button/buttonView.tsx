import { Button } from '@mui/material'
import { classes } from './button.styles.ts'

interface ButtonViewProps {
    title: string
    isActive: boolean
    isDisabled: boolean
    onClick: VoidFunction
}

export const ButtonView: React.FC<ButtonViewProps> = ({ title, onClick, isActive, isDisabled }) => (
    <Button
        size="large"
        sx={classes.button}
        variant={isActive ? 'contained' : 'outlined'}
        onClick={onClick}
        key={title}
        disabled={isDisabled}
    >
        {title}
    </Button>
)

ButtonView.displayName = 'ButtonView'
