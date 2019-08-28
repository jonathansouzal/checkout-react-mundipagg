import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row className="headerPrincipal">
         <Col>
         <p>Checkout - Finalize o seu pedido</p>
          </Col>
          </Row>
    );
  }
}