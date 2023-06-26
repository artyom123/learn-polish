import React from 'react'
import { ModalProps } from '@mui/material/Modal'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import CSVReader from '../csvReader/csvReader'
import { classes } from './dialog.styles'

interface DialogViewProps {
    open: ModalProps['open']
    onClose: VoidFunction
}

export const DialogView: React.FC<DialogViewProps> = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Загрузите CSV
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Пожалуйста, загрузите файл формата .CSV
            </DialogContentText>
            <Box sx={classes.box}>
                <CSVReader />
            </Box>
        </DialogContent>
    </Dialog>
)

DialogView.displayName = 'DialogView'
