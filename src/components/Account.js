import React from "react";
import {Col, Form, Row, Button} from "react-bootstrap";

class Account extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <main className='container' style={{maxWidth: 500}}>
                <h2>Payment</h2>
                <br/>
                <Row>
                    <Col xs={12} md={12}>
                        <Form>
                            <Form.Group controlId="formGridCredit">
                                <Form.Label>Card Holder's Name</Form.Label>
                                <Form.Control type="name" placeholder="First Name Gopi Krishna" />
                            </Form.Group>

                            <Form.Label>Card Number</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formFirst4">
                                    <Form.Control type="text" placeholder="1234"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formSecond4">
                                    <Form.Control type="text" placeholder="1234"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formThird4">
                                    <Form.Control type="text" placeholder="1234"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formForth4">
                                    <Form.Control type="text" placeholder="1234"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formCVC">
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control placeholder={123}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formExpiration">
                                    <Form.Label>Expiration</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control placeholder={1991}/>
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </main>
        )
    }
}

export default Account;