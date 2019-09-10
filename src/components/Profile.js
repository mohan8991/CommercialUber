import React from "react";
import {Form, Row, Col, Button, Image} from "react-bootstrap";
import ProfileComp from "./ProfileComp";

class Profile extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Profile</h2>
                <br/>
                <Row>
                    <Col xs={8} md={8}>
                        <Form>

                            <ProfileComp label="First Name" defaultValue="Mohan Krishna" controlId="formHorizontalFirstName" readOnly="true" labelCol="3" inputCol="6"/>
                            <ProfileComp label="Last Name" defaultValue="Gopi Krishna" controlId="formHorizontalLastName" readOnly="true" labelCol="3" inputCol="6"/>
                            <ProfileComp label="Email" defaultValue="email@example.com" controlId="formHorizontalEmail" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="Phone" defaultValue="(123)412-1359" controlId="formHorizontalPhone" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="Address" defaultValue="1234 Circle St," controlId="formHorizontalAddress1" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="Address 2" defaultValue="Apartment, studio, or floor" controlId="formHorizontalAddress2" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="City" defaultValue="Oviedo" controlId="formHorizontalCity" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="State" defaultValue="FL" controlId="formHorizontalState" readOnly="false" labelCol="3" inputCol="6"/>
                            <ProfileComp label="ZIP" defaultValue="32765" controlId="formHorizontalPin" readOnly="false" labelCol="3" inputCol="6"/>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={4} md={4}>
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