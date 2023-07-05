import { DialogTitle } from '@mui/material'
interface DialogTitleProps {
    title: string
}

export const DialogTitleComponent: React.FC<DialogTitleProps> = ({ title }) => (
    <DialogTitle id="alert-dialog-title">
        {title}
    </DialogTitle>
)

DialogTitleComponent.displayName = 'DialogTitleComponent'
