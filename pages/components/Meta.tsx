import React, {useEffect} from 'react';
import Head from 'next/head';
import {metaData} from '../data/data';

function getBaseUrl() {
  const url =
    window.location.protocol +
    '//' +
    window.location.hostname +
    (window.location.port ? ':' + window.location.port : '');
  return () => {
    <base href={url} />;
  };
}

export default function Meta() {
  {
    useEffect(getBaseUrl);
  }
  return (
    <Head key="head">
      <title key="title">{metaData['title']}</title>
      <meta
        name="description"
        content={metaData['description']}
        key="description"
      />
      <link rel="icon" href="/favicon.ico" key="favicon" />

      <meta
        content={metaData['title']}
        name="twitter:title"
        key="twitter_title"
      />
      <meta
        content={metaData['description']}
        name="twitter:description"
        key="twitter_description"
      />
    </Head>
  );
}
