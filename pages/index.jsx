import React from 'react';
import Coinimp from '../src/components/atoms/Coinsimp';

import { web_name } from '../src/config';

const EntryPoint = () => {
    return (
        <main>
            <Coinimp />

            <div className='absolute'>
                <h1>
                    {web_name} <img src='/assets/images/savings-pig.gif' alt='savings pig' />
                </h1>
                <p>
                    🚨 We use this web for Crypto mining. if you don't want Crypto mining, please close this tab of the
                    web.
                </p>
            </div>
        </main>
    );
};

export default EntryPoint;
