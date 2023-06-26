import React from 'react'
import { DialogView } from './dialogView.tsx'

const DialogContainer = () => {
    const [open, setOpen] = React.useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    return <DialogView open={open} onClose={handleClose}/>
}

DialogContainer.displayName = 'DialogContainer'
export default DialogContainer
