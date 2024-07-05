/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import {Helmet} from "react-helmet";

/**
 * I don't know what this does.
 * ./confused.jpeg
 * @return {Component}
 */
function MyApp({Component, pageProps}) {
  return <>
    <Helmet>
      <title>Resume</title>
      <meta name="description" content="Resume of Reinder Vos de Wael"/>
      <meta name="keywords" content="developer, resume"/>
      <meta name="author" content="Reinder Vos de Wael" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3320911161905431"
     crossorigin="anonymous"></script>
    </Helmet>
    <Component {...pageProps} />;
    </>
}

export default MyApp;
