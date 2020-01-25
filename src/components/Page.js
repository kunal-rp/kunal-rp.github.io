import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Header from './Header'
import Main from './Main'

import './Page.css'

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row> <Col sm="12" md="6" className="main"><Main/></Col> </Row>
      </Container>);
  }
}


export default Page;
