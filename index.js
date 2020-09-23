'use strict';
const https = require('https');
const regexp = /class="(.*)branch-name(.*)>(.*)</g; // The default branch is always the first on the page

module.exports = path => {
    // Normalize path to be URL relative to https://github.com/ by default
    const url = new URL(path, 'https://github.com/');
    // Force https connection
    url.protocol = 'https:';
    path = url.toString();

    return new Promise((resolve, reject) => {
        https.get(path + '/branches', response => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load url: ' + response.statusCode));
                return;
            }

            response.setEncoding('UTF-8');
            let data = '';

            response.on('data', body => {
                data += body;
            });

            response.on('end', () => {
                try {
                    // The first item (0) will be at the top and will be the default branch
                    const regexMatch = data.match(regexp)[0].split('>')[1].split('<')[0];
                    return resolve(regexMatch);
                } catch (error) {
                    return reject(new Error('Failed to get default branch: ' + error));
                }
            });
        }).on('error', error => {
            return reject(error);
        });
    });
};