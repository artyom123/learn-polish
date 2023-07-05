import { Box } from '@mui/material'
import { classes } from './dialogContent.styles.ts'

interface DialogContentActionProps {
    children: React.ReactNode
}

export const DialogContentAction: React.FC<DialogContentActionProps> = ({ children }) => (
    <Box sx={classes.box}>
        {children}
    </Box>
)

DialogContentAction.displayName = 'DialogContentAction'
