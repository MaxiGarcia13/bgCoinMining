import React from 'react';
import Head from 'next/head';
import SEO from '../../atoms/SEO';
import { icon } from '../../../config';

const AppComponent = ({ children }) => (
    <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
            <link rel='shortcut icon' type='image/x-icon' href={icon} />
            <link rel='icon' type='image/vnd.microsoft.icon' href={icon} />
            <link rel='shortcut icon' type='image/x-icon' href={icon}></link>
            <link rel='icon' href={icon} />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
                href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
                rel='stylesheet'
            />
        </Head>
        <SEO />
        {children}
    </>
);

export default AppComponent;
