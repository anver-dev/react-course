import React from "react";
import PropTypes from 'prop-types'


// Functional Component
const PrimeraApp = ({ saludo }) => {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <p>Primeros pasos en React</p>
      <p>{ saludo }</p>
    </>
  );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
