import React from 'react'
import { Container, Row, Col, Card, Form} from 'react-bootstrap'
import Result from './Result'

export default class FlyingText extends React.Component{
    render(){
        let value = {name: 'aaaa', duration: 0}
        return(
            <Container fluid="md">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>
                                <Card.Title>Flying text</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Text is flying based on timer</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Form.Control type='text' placeholder='Enter name...' onChange={(e) => {value.name = e.target.value;}}/>
                                <br></br>
                                <Form.Control as="select" custom id='selection-box' onSelect={(e) => {value.duration = e.target.value}}>
                                    <option default>Choose timer...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Card.Body>
                            <Card.Footer>
                                <Result name={value.name} duration={value.duration}/>
                            </Card.Footer>
                            </Card>
                        </Col>
                </Row>
            </Container>
        )
    }
}