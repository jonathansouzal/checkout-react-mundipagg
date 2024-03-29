import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './App.css';

export default class Example extends React.Component {
  render() {
    return (
        <div className="produto">   
        <Toast>
        <ToastHeader icon="success" className="nomeProduto">          
          Exemplo nome - Pilates
        </ToastHeader>
        <ToastBody  className="matriculaProduto">
          Matrícula - R$ 20,00
        </ToastBody>
        <ToastBody className="precoProduto">
          R$ 250,00
        </ToastBody>
      </Toast>
        </div> 
    );
  }
}
