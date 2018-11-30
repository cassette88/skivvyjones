import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";

export default class Foot extends Component {
  render() {
    return (
        <Footer color="black" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
            <h5 className="title">Skivvy Jones</h5>
            <p>
              I love to recycle....
            </p>
            <p>Drop me a line: skivvyjones at gmail.com</p>
            </Col>
            {/* <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
            </Col> */}
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> Skivvyjones.com </a>
          </Container>
        </div>
      </Footer>
    )
  }
}
