'use strict';

/*
    This file can be used as entry point for webpack!
 */

/* global pug */

const pug = require('pug');

pug.renderFile(
    'index.pug',
    {
        directory: 'services',
        static: {
            img: [
                'services-balance.jpg',
                'services-banking.jpg',
                'services-payment.jpg'
            ]
        }
    }
);
