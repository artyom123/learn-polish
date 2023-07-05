import { ModalProps } from '@mui/material/Modal'
import { Dialog } from '@mui/material'

interface DialogViewProps {
    open: ModalProps['open']
    onClose: VoidFunction
    children: React.ReactNode
}

export const DialogView: React.FC<DialogViewProps> = ({
    open,
    onClose,
    children,
}) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        {children}
    </Dialog>
)

DialogView.displayName = 'DialogView'
