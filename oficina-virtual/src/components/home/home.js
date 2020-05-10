import React from 'react';
import {Row, Col, Container, Card, Button} from 'react-bootstrap';

//fullpage import
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

//import images
import noPensionista from '../../images/userType/noPensionista/no-pensionista.jpeg';
//import pensionista from '../../images/userType/pensionista';

// css home
//import './home.css'

const Home = () =>(
    
<ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
           <Row >
               <Col className="align">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/userType/noPensionista/no-pensionista.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
           </Row>
           
          </div>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

//ReactDOM.render(<Home />, document.getElementById('react-root'));

export default Home;