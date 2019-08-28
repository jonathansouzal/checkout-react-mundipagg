import React from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label  className="contrato"  for="backdrop">Li o contrato?</Label>{' '}
            <Input  className="contratoEscolha"  type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="false">Não, não li.</option>
              <option value="true">Sim, Li.</option>              
            </Input>
          </FormGroup>
          {' '}
          <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Ler o contrato</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Contrato de prestação de serviço.</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Fechar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;