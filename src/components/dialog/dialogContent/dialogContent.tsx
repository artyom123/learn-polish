import { Box, DialogContent, DialogContentText } from '@mui/material'
import { classes } from './dialogContent.styles.ts'
import { DialogContentAction } from './dialogContentAction.tsx'

interface DialogContentProps {
    text: string
    children: React.ReactNode
}

interface Components {
    Action: typeof DialogContentAction
}

export const DialogContentComponent: React.FC<DialogContentProps> & Components = ({
    text,
    children,
}) => {
    return (
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {text}
            </DialogContentText>
            <Box sx={classes.box}>
                {children}
            </Box>
        </DialogContent>
    )
}

DialogContentComponent.Action = DialogContentAction
DialogContentComponent.displayName = 'DialogContentComponent'
