// import logo from '/logo.svg';
import logo from '~/assets/images/logo.svg'
import '~/App.css';
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import ResponsiveAppBar from '~/navbar.component'
import { Box, Container, CardMedia } from '@mui/material';
import Reservation from './reservation.component';
import apiClient from "~/api/http-common";
import { Button } from '@mui/material';

function App() {

  const [getId, setGetId]         = useState("");
  const [getTitle, setGetTitle]   = useState("");
  const [getResult, setGetResult] = useState(null);

  const fortmatResponse           = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isLoadingBooks, refetch: getAllBooks } = useQuery(
    "query-get-all",
    async () => {
      return await apiClient.get("/books/");
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status : res.status + "-" + res.statusText,
          headers: res.headers,
          data   : res.data,
        };
        setGetResult(fortmatResponse(result));
      },
      onError: (err) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  
  useEffect(() => {
    if (isLoadingBooks) setGetResult("loading...");
  }, [isLoadingBooks]);

  function getAllData() {
    try {
      getAllBooks();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }
  const clearGetOutput = () => {
    setGetResult(null);
  };

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
          flexDirection  = {'column'}
          width          = "auto"
          sx             = {{ 
            position: "relative",
            zIndex  : 1,
            bgcolor : 'pink',
            height  : '100vh'
          }}>
            <Reservation />
            <Button variant="contained" onClick={getAllData}>GET ALL DATA</Button>  
            {getResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{getResult}</pre>
            </div>
          )}
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
