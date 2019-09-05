import React from "react";
import {Form, Row, Col, Button, Image} from "react-bootstrap";

class Profile extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Profile</h2>
                <Row>
                    <Col xs={6} md={6}>
                        <Form>
                        <Form.Row controlId="formHorizontalFirstName">
                            <Form.Label column sm={3}>
                                First Name
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="Mohan Krishna" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalLastName">
                            <Form.Label column sm={3}>
                                Last Name
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="Gopi Krishna" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Email
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalPhone">
                            <Form.Label column sm={3}>
                                First Name
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="(123)412-1359" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalAddress1">
                            <Form.Label column sm={3}>
                                Address
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="1234 Circle St," />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalAddress2">
                            <Form.Label column sm={3}>
                                Address 2
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="Apartment, studio, or floor" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalCity">
                            <Form.Label column sm={3}>
                                City
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="Oviedo" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalState">
                            <Form.Label column sm={3}>
                                State
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="FL" />
                            </Col>
                        </Form.Row>

                        <Form.Row controlId="formHorizontalPin">
                            <Form.Label column sm={3}>
                                ZIP
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control plaintext readOnly defaultValue="32765" />
                            </Col>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                    </Col>
                    <Col xs={6} md={6}>
                        <Row>
                            <Image src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cff580125%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cff580125%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.9296875%22%20y%3D%2294.5609375%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" thumbnail />
                        </Row>
                        <Row>
                            <input type="file" className="image-upload" accept="image/*"/>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Profile;