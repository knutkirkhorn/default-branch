'use strict';
const https = require('https');
const regexp = /class="branch-name css-truncate-target">(.*?)</g;

module.exports = path => {
    if (!(path.startsWith('https://github.com/') || path.startsWith('http://github.com/'))) {       
        path = 'https://github.com/' + path;
    }

    if (path.startsWith('http://github.com/')) {
        // Force https connection
        path = path.substr(0, 4) + 's' + path.substr(4);
    }

    return new Promise((resolve, reject) => {
        https.get(path + '/branches', (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load url: ' + response.statusCode));
                return;
            }

            response.setEncoding('UTF-8');
            let data = '';

            response.on('data', function(body) {
                data += body;
            });

            response.on('end', function() {
                try {
                    const regexMatch = data.match(regexp);
                    // The first item (0) will be at the top and will be the default branch
                    resolve(regexMatch[0].split('>')[1].split('<')[0]);
                } catch (err) {
                    reject(new Error('Failed to get default branch: ' + err));
                    return;
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
};