import { Container } from '@mui/material'
import CardChecked from '../cardChecked/cardCheckedContainer.tsx'

export const TestContentView = () => (
    <Container maxWidth="sm">
        <CardChecked />
    </Container>
)

TestContentView.displayName = 'TestContentView'
