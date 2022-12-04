/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

/**
 * I don't know what this does.
 * ./confused.jpeg
 * @return {Component}
 */
function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
