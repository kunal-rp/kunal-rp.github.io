import React from 'react';
import {Container, Col, Row, Image,Toast} from 'react-bootstrap';
import './Header.css'

class Header extends React.Component {
  render() {

     const createArticleToast = () => {
         return (
           <Toast className='toast'>
              <Toast.Header closeButton={false}>
                <img src="article.png" height={30}/>
                <strong className="mr-auto">Check out this article!</strong>
              </Toast.Header>
              <Toast.Body>My journey over then past 5 years, condensed into a couple pages</Toast.Body>
            </Toast>
  )
     }


    return (
    	<Container>
    		<Row >
    			<Col sm="12" md="8" > 
	    			<Col sm="12" className="title" > 
	    				Kunal Purohit
	    			</Col>
	    			<Col sm="12" className="sub" > 
	    				Full Stack @ <img src="gpay.png" className='logo'/>
	    			</Col>
    			</Col>
    			<Col sm="12" md="4" > 
    				{createArticleToast()}
    			</Col>
    		</Row> 	
    	</Container>
    )
  }
}


export default Header;
