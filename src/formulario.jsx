import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import Contrato from './contrato';
import Cartao from './cartao';
import Footer from './footer';
import Produto from './produto';


export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
        <FormGroup>
          <Label for="exampleCupom">Cupom de desconto!</Label>
          <Input
            type="number"
            name="number"
            id="exampleCupom"
            placeholder="Insira aqui o seu cupom..."
          />              
        </FormGroup>
          </Col>
        </Row>
<Row>
          <Col>
          
          
          <Form>  
           
        <Row form>
          <Col md={6}>
            <FormGroup>
            <Label for="exampleName">Nome Completo</Label>
              <Input type="nome" name="name" id="exampleName" placeholder="Seu nome completo..." />              
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label for="exampleEmail">E-mail</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Seu e-mail..." />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
            <Label for="exampleNumber">CPF</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="Seu CPF..."
          />              
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="exampleTime">Data de nascimento</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="Data do seu aniversário..."
          />
        </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
            <Label for="exampleNumber">Celular | WhatsApp</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="Seu número de contato..."
          />              
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="exampleCustomSelect">Sexo</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Selecionar...</option>
            <option>Feminino</option>
            <option>Masculino</option>
          </CustomInput>
        </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
            <Label for="exampleVendedor">Código do vendedor(a)</Label>
              <Input type="nome" name="name" id="exampleVendedor" placeholder="Código do seu vendedor(a)..." /> 
            </FormGroup>
          </Col>
          </Row> 
          <Contrato></Contrato>
          
               
       
        <div className="copy">
        
        </div>
      </Form>          
          
          
          </Col>
          <Col>
          <Produto></Produto>
          <Cartao></Cartao>
          <Button color="success">Comprar agora</Button>{' '}
          </Col>
</Row>
      
      <Footer></Footer>     
</Container>
    );
  }
}