import React from 'react';
import App from '../src/components/templates/App';
import '../styles/base.css';

const AppComponent = ({ Component, pageProps }) => (
    <App>
        <Component {...pageProps} />
    </App>
);

export default AppComponent;
