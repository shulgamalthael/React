import React from 'react';

const alertButton = event => {
   const element = document.querySelector('.fancy-button');
   alert('Good job!');
}

const GoodButton = () => {
    return (
      <button onClick={alertButton} className="fancy-button">Good job!</button>  
    );
}

export default GoodButton;