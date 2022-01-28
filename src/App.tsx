import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { MyMapComponent } from './map/Map';
import { useSelector } from 'react-redux';
import { SetCoffeePlaceForm } from './set-coffee-place-form/set-coffee-place-form';
import { SearchCompetitorBtn } from './search-competitor-btn/search-competitor-btn';

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null as any;
};

//49.816152382127115, 24.001515554958253
function App() {
  const center = useSelector((state: any) => state.coffeePlace.value);
  const competitors = useSelector((state: any) => state.competitors.list);
  console.log('🚀 ~ file: App.tsx ~ line 23 ~ App ~ competitors', competitors);
  const zoom = 18;
  
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <SetCoffeePlaceForm />
          </Row>
          <Row>
            <Col>
              <SearchCompetitorBtn />
            </Col>
          </Row>
          <Row>
            <ul>
              {competitors.length > 0 &&
                competitors.map((el: any)=> {
                  return <li key={el.name} >Name: <b>{el.name}</b> Rating:<b>{el.rating}*</b></li> 
                })
              }
              
            </ul>
          </Row>
        </Col>
        <Col>
          <Wrapper apiKey="AIzaSyADSgOs32KP3ipSfbHGlM8A3Yb1w4hMv4U" render={render}>
            <MyMapComponent center={center} zoom={zoom} competitors={competitors.map((el: any) => el.geometry.location)} />
          </Wrapper>
        </Col>

      </Row>
    </Container>
  );
}

export default App;
