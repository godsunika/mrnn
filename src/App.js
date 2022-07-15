// import logo from '/logo.svg';
import logo from '~/assets/images/logo.svg'
import '~/App.css';
import ResponsiveAppBar from '~/navbar.component'
import { Box, Container, CardMedia } from '@mui/material';
import Reservation from './reservation.component';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container maxWidth="lg">
        <Box 
          mt     = {-25}
          sx     = {{
            position               : "relative",
            zIndex                 : 2,
            borderBottomRightRadius: 200,
            borderBottomLeftRadius : 200,
            bgcolor                : 'white',
            height                 : '100vh',
          }} >
          <CardMedia
            sx     = {{      
              position               : "relative",
              zIndex                 : 2,
              borderBottomRightRadius: 200,
              borderBottomLeftRadius : 200,
              opacity                : '100%'
            }}
            component = "img"
            alt       = "green iguana"
            height    = "100%"
            image     = "https://images.unsplash.com/photo-1470434151738-dc5f4474c239?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box 
          mt             = {-25}
          display        = "flex"
          justifyContent = "center"
          sx             = {{ 
            position: "relative",
            zIndex  : 1,
            bgcolor : 'pink',
            height  : '100vh'
          }}>
            <Reservation />
        </Box>
      </Container>
      <Container  maxWidth="lg">
        <Box sx={{ bgcolor: '#3E3E3E', height: '100vh' }} />
      </Container>
      <Container  maxWidth="lg">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>
      <Container  maxWidth="lg">
        <Box 
          style={{
            height:'180vh',
            minHeight:'400px',
            backgroundSize:'cover',
            backgroundImage: "url('https://images.unsplash.com/photo-1470434151738-dc5f4474c239?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb')"
          }}
        />
      </Container>
    </div>
  );
}

export default App;
