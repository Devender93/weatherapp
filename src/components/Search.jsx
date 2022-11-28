import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
function Search(props) {
    const searchinput = useRef();
  return (
  <>
  <Col>
   <InputGroup className="mb-3">
   
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1" type="Search" value={props.searchData} onChange={ () =>props.eventHandler(searchinput.current.value)} ref={searchinput}
        />  
      </InputGroup>
      </Col>
      <Col>
    <Button onClick={props.searchWeather} variant="primary" type="submit">
        Search
      </Button>
      </Col>
   
      </>
    
 
  )
}

export default Search