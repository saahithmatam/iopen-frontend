
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Image, Button, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Routes } from "routes";
import NotFoundImage from "assets/img/illustrations/404.svg";


export default () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                <Card.Link as={Link} to={Routes.DashboardOverview.path}>
                  <Image src={NotFoundImage} className="img-fluid w-75" />
                </Card.Link>
                <h1 className="mt-5">
                  Authentication <span className="fw-bolder">Error</span>
                </h1>
                <p className="lead my-4">
                  Oops! Looks like you entered an incorrect firstname,lastname, or password, Please remember the password is case sensitive.
                </p>
                <Button as={Link} variant="gray-800" className="d-inline-flex align-items-center justify-content-center mb-4" to={Routes.Signin.path}>
                  <ChevronLeftIcon className="icon icon-xs me-2" />
                  Try Again
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
