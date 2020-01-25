import React from 'react';
import {Container, Col, Row,Media,Badge} from 'react-bootstrap';

import './Main.css'
import myData from './main_data.json';
class Main extends React.Component {
  render() {

  	const items = myData.map( data => {
  		return (<Row>
  			<Media>
  			<img
  				padding={5}
			    width={64}
			    height={64}
			    src={data.icon}
			  />
			  <Media.Body>
			    <h4>{data.title} {data.personal === true ?
			     <Badge variant="secondary">Personal Project</Badge> :
			     data.current == true ? <Badge variant="success">Currently</Badge>:<Badge variant="primary">{data.type}</Badge>}</h4>
			    <p> {data.info}</p>
			  </Media.Body>
			</Media>
  		</Row>)
  	})

    return (
      <Container>
      	<Row> 
      	<h2 style={{'text-decoration':'underline'}}>Cool Stuff</h2>
      	</Row>
        {items}
      </Container>);
  }
}


export default Main;
