import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (

    <div className="calculator-container">

      <div className="top-section">
        <div className="calculator-display">
          <button className="result-display"> 0 </button>
        </div>
      </div>


      <div className="button-rows-section">
        <div className="buttons-row">
          <button className="clear-button"> clear </button>
          <button className="operator-button"> / </button>
        </div>
      </div>


      <div className="button-rows-section">
        <div className="buttons-row">
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <button className="operator-button"> x </button>
        </div>

        <div className="buttons-row">
          <button> 4 </button>
          <button> 5 </button>
          <button> 6 </button>
          <button className="operator-button"> - </button>
        </div>

        <div className="buttons-row">
          <button> 1 </button>
          <button> 2 </button>
          <button> 3 </button>
          <button className="operator-button"> + </button>
        </div>
      </div>


      <div className="button-rows-section">
        <div className="buttons-row">
          <button className="long-button"> 0 </button>
          <button className="operator-button"> = </button>
        </div>
      </div>

    </div>


  );
};

export default App;






// <div>
// <h3>Welcome to React Calculator</h3>
// <p>
//   We have given you a starter project. You'll want to build out your
//   components in their respective files, remove this code and replace it
//   with the proper components.
// </p>
// <p>
//   <strong>
//     Don't forget to `default export` your components and import them here
//     inside of this file in order to make them work.
//   </strong>
// </p>
// </div>