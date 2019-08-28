import React from 'react';
import './App.css';
import CardReactFormContainer from 'card-react';
import '../node_modules/card-react/lib/card.css';


export default class Example extends React.Component {
  render() {
    return (
        <div className="cartao"> 
       
       <div id="card-wrapper"></div>

       <CardReactFormContainer
 
 container="card-wrapper" // required

 initialValues= {
    {
      number: '•••• •••• •••• ••••', // optional — default •••• •••• •••• ••••
    }
  }
 // an object contain the form inputs names.
 // every input must have a unique name prop.
 formInputsNames={
   {
     number: 'CCnumber', // optional — default "number"
     expiry: 'CCexpiry',// optional — default "expiry"
     cvc: 'CCcvc', // optional — default "cvc"
     name: 'CCname' // optional - default "name"
   }
 }
 classes={
   {
     valid: 'jp-card-valid', // optional — default 'jp-card-valid'
     invalid: 'jp-card-invalid' // optional — default 'jp-card-invalid'
   }
 }
>

 <form>
   <input placeholder="Nome no cartão" type="text" name="CCname" />
   <input placeholder="Número do cartão" type="text" name="CCnumber" />
   <input placeholder="MM/YY" type="text" name="CCexpiry" />
   <input placeholder="CVC" type="text" name="CCcvc" />
 </form>

</CardReactFormContainer>





        </div>
    );
  }
}
