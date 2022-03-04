import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const TwitTwit = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>TwittwiT</title>
      </Head>
      <Component />
    </>
  );
};

TwitTwit.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default TwitTwit;