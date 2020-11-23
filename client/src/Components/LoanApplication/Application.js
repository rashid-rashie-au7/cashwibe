import React, { Component } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import './style.css'

export default class Application extends Component {
    render() {
        return (
            <div>
                <h3>Personal Loan Application</h3>
                <Form>
                    <Container>
                        <h5>Personal Details</h5>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col xs={2}>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="select">
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Miss</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Col>
                                <Col>
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="Number" name="phone"  />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dob" />
                                </Col>
                                <Col>
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control as="select">
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Widowed</option>
                                        <option>Divorced</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                            
                                <Col>
                                    
                                    <Form.Control type="text" name="house" placeholder="Lane 1" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" name="house" placeholder="Lane 2" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Control type="text" name="house" placeholder="City" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" name="house" placeholder="State" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Container>
                    <Container>
                        <h5>Financial Details</h5>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Bank Name</Form.Label>
                                    <Form.Control as="select">
                                        <option>Axis Bank</option>
                                        <option>Bank of Baroda</option>
                                        <option>Bank of India</option>
                                        <option>Canara Bank</option>
                                        <option>CSB Bank</option>
                                        <option>Federal Bank</option>
                                        <option>HDFC Bank</option>
                                        <option>ICICI Bank</option>
                                        <option>IDBI Bank</option>
                                        <option>Indian Bank</option>
                                        <option>Indian Overseas Bank</option>
                                        <option>IndusInd Bank</option>
                                        <option>Jammu & Kashmir Bank</option>
                                        <option>Karnataka Bank</option>
                                        <option>Kotak Mahindra Bank</option>
                                        <option>Punjab National Bank</option>
                                        <option>RBL Bank</option>
                                        <option>South Indian Bank</option>
                                        <option>State Bank of India</option>
                                        <option>UCO Bank</option>
                                        <option>Union Bank of India</option>
                                        <option>YES India</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control type="text" name="branch"  />
                                </Col>

                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>IFSC Code</Form.Label>
                                    <Form.Control type="text" name="ifsc"  />
                                </Col>
                                <Col>
                                    <Form.Label>Account Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Savings</option>
                                        <option>Current</option>
                                        <option>Salary</option>
                                        <option>NRI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col xs={6}>
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text" name="acno"  />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col >
                                    <Form.Label>Other Loan</Form.Label> <br />
                                    <Form.Check inline label="Yes" type="radio" />
                                    <Form.Check inline label="No" type="radio"  />
                                </Col>
                                <Col>
                                    <Form.Label>Loan Details</Form.Label>
                                    <Form.Control type="text" name="details"  />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Container>
                    <Container>
                        <h5>Employment Details</h5>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="text" name="job"  />
                                </Col>
                                <Col>
                                <Form.Label>Employment Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select</option>
                                        <option>Permanent</option>
                                        <option>Contract</option>
                                        <option>Self-Employed</option>
                                        <option>Student</option>
                                        <option>Retired</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row> 
                                <Col>
                                <Form.Label>Company</Form.Label>
                                    <Form.Control type="text" name="company" />
                                </Col>
                                <Col>
                                <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="companyadd"  />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>                          
                                <Col>
                                    <Form.Label>Experiance</Form.Label>
                                    <Form.Control type="number" name="exp"  />
                                </Col>
                                <Col>
                                    <Form.Label>Monthly Salary</Form.Label>
                                    <Form.Control type="text" name="salary"  />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Container>
                    <Container>
                        <h5>Loan Details</h5>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Loan Amount</Form.Label>
                                    <Form.Control type="Number" name="job"  />
                                </Col>
                                <Col>
                                <Form.Label>Tenure</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>
                                        <option>2 Years</option>
                                        <option>3 Years</option>
                                        <option>4 Years</option>
                                        <option>5 Years</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row> 
                                <Col>
                                <Form.Label>Interest %</Form.Label>
                                    <Form.Control type="text" name="interest" readOnly/>
                                </Col>
                                <Col>
                                <Form.Label>EMI</Form.Label>
                                    <Form.Control type="text" name="emi" readOnly />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Row>                          
                                <Form.Check type="checkbox" inline label="I acknowledge that I have read, and do hereby accept the terms and conditions"></Form.Check>
                            </Form.Row>
                        </Form.Group>
                    </Container>
                    <div className="btn-container">
                        <div className="button">
                            <button className="button" type="submit" size= "xxl">Apply</button>
                        </div>    
                    </div> 
                </Form>
                
            </div>
        )
    }
}
