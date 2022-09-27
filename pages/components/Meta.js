import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
/**
 * Stores the website metadata in the header.
 * @return {Component}
 */
export default function Meta(...props) {
  return (
    <Head>
      <title>{props['title']}</title>
      <meta name="description" content={props['description']} />
      <link rel="icon" href="/favicon.ico" />

      {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
      <meta content={props['title']} name="twitter:title" />
      <meta content={props['description']} name="twitter:description" />
    </Head>
  );
}
Meta.propTypes = {
  'title': PropTypes.string.isRequired,
  'description': PropTypes.string.isRequired,
};
