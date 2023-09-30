import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Title } from './styled';

export default function Header() {
    return (
      <main>
        <Container>
          <Box>
            <Card>
              <Typography variant="h2">Hello World ~</Typography>
              <Title>Test header</Title>
            </Card>
          </Box>
        </Container>
      </main>
    );
  }