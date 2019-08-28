import React from 'react';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import './App.css';

export default class Example extends React.Component {
  render() {
    return (
        <div className="produto"> 
  
        <Toast>
        <ToastHeader icon="success">
          Exemplo nome - Pilates
        </ToastHeader>
        <ToastBody>
          Breve descrição da modalidade — R$ 250,00
        </ToastBody>
      </Toast>
        </div>
    );
  }
}
