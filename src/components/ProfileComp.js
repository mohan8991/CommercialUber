import React from "react";
import {Col, Form} from "react-bootstrap";

function ProfileComp(props) {
    return(
        <Form.Row controlId={props.controlId}>
            <Form.Label column sm={props.labelCol}>
                {props.label}
            </Form.Label>
            <Col sm={props.inputCol}>
                <Form.Control plaintext readOnly={props.readOnly} defaultValue={props.defaultValue} />
            </Col>
        </Form.Row>
    );
}

export default ProfileComp;