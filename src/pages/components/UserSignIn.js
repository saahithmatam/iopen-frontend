
import React from "react";
import { MDBIcon} from 'mdbreact'; 
import { ArrowNarrowLeftIcon, LockClosedIcon, MailIcon } from "@heroicons/react/solid";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/img/illustrations/signin.svg";
import { FacebookIcon, GithubIcon, TwitterIcon } from "components/BrandIcons";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center vh-lg-100 mt-5 mt-lg-0 bg-soft">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" action="/usersignin" method="POST">
                  <Form.Group controlId = "form.firstname" className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" name="firstname" placeholder="Jason" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId = "form.lastname" className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" name="lastname" placeholder="Fisherman" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId = "form.phonenumber" className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" name="phonenumber" placeholder="8323233021" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group controlId="form.password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <LockClosedIcon className="icon icon-xs text-gray-600" />
                        </InputGroup.Text>
                        <Form.Control type="text" name="password" placeholder="Password" />
                      </InputGroup>
                  </Form.Group>
                    {/* <div className="d-flex justify-content-between align-items-top mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div> */}
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="gray-800" type="submit">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
