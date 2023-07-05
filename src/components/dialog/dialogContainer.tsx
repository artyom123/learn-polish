import React from 'react'
import { DialogContentComponent } from './dialogContent/dialogContent.tsx'
import { DialogTitleComponent } from './dialogTitle/dialogTitle.tsx'
import { DialogView } from './dialogView.tsx'

interface DialogContainerProps {
    children: React.ReactNode
}

interface Components {
    Title: typeof DialogTitleComponent
    Content: typeof DialogContentComponent
}

const DialogContainer: React.FC<DialogContainerProps> & Components = ({ children }) => {
    const [open, setOpen] = React.useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    return <DialogView open={open} onClose={handleClose} children={children}/>
}

DialogContainer.Content = DialogContentComponent
DialogContainer.Title = DialogTitleComponent
DialogContainer.displayName = 'DialogContainer'

export default DialogContainer
