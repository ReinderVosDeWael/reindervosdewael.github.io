import {React, useEffect} from 'react';
import Head from 'next/head';
import {metaData} from '../data';

/**
 * @return {function} function that sets the base URL.
 */
function getBaseUrl() {
  const url =
    window.location.protocol +
    '//' +
    window.location.hostname +
    (window.location.port ? ':' + window.location.port : '');
  return () => {
    <base href={url} />;
  };
};

/**
 * Stores the website metadata in the header.
 * @return {Component}
 */
export default function Meta() {
  return (
    <Head>
      {useEffect(getBaseUrl)}
      <title>{metaData['title']}</title>
      <meta name="description" content={metaData['description']} />
      <link rel="icon" href="/favicon.ico" />

      {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
      <meta content={metaData['title']} name="twitter:title" />
      <meta content={metaData['description']} name="twitter:description" />
    </Head>
  );
}
