import React from 'react'
import { Modal, Row ,Col,Form } from 'react-bootstrap';
import './ModalCalc.css';

function ModalCalc(props) {
    const [ value, setValue ] = React.useState(50000);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Personal Loan EMI Calculator
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="input-container">
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Row>
                                 <Col xs={8}>
                                        <Form.Label>Range</Form.Label>
                                        <Form.Control className="custom-range" type="range" min='50000' max="1500000" value={value}
                                            onChange={e => setValue(e.target.value)} 
                                            variant='warning' />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" value={value}/>
                                    </Col>
                                </Form.Row>
                                
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Control type="text" placeholder="Interest Rate %" />
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Control as="select">
                                    <option>Select Tenure</option>
                                    <option>3 Months</option>
                                    <option>6 Months</option>
                                    <option>9 Months</option>
                                    <option>12 Months</option>
                                    <option>16 Months</option>
                                    <option>24 Months</option>
                                    <option>36 Months</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="emi-container">
                        <div>Equated Monthly Instalment(EMI)</div>
                        <div>₹25000</div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCalc
