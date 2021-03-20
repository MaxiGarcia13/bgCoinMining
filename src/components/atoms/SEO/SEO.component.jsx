import React from 'react';
import Head from 'next/head';
import config from '../../../config';

const SEOcomponent = ({ title = config.web_name, description = config.description, img = config.icon }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={img} />
        </Head>
    );
};

export default SEOcomponent;
