
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Result from './components/Result';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import axios from  'axios';
function App() {
  const [search,setSearch]=useState();
  const [weather,setWeather]=useState([]);
  const changesearch=(value)=>{
  setSearch(value);
  }
  const searchWeatherHandler= () => {
    if(search !== ''){
      axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ef8a4cb28b97e9a17684fbb77c9409be&units=metric`
      )
      .then(
        (response)=>{
        console.log(response);
        setWeather(response.data)
      }
      ).catch(
        (error)=>{
      console.log(error);
  
      }
      )
    }
   
  }

  
  return (
    <>
    <Container>
      <Row>
      <Search searchData={search} eventHandler={changesearch} searchWeather={searchWeatherHandler}/>
      <Result weatherData={weather}/>
     </Row>
     </Container>
    </>
  );
}

export default App;
